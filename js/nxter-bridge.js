$('#nxter-clear-qr-section').click( function(e) {
  e.preventDefault();
  $('#nxter-qrcode').html('');
  $('#nxter-text-for-qr-code').val('');
});

$('#nxter-generate-qr-code').click( function(e) {
  e.preventDefault();
  var text4qr = $('#nxter-text-for-qr-code').val().trim();
  $('#nxter-qrcode').html('');
  $('#nxter-qrcode').qrcode({ width: 256, height: 256, text: text4qr });

});

$('#nxter-generate-account').click( function(e) {
  e.preventDefault();
  var new_random_password = $('#nxter-new-passphrase').val().trim();
  var publicKey =  NRS.getPublicKey(converters.stringToHexString(new_random_password)) ;
  var accountId = NRS.getAccountIdFromPublicKey(publicKey, true);
  $('#nxter-new-publickey').val(publicKey);
  $('#nxter-new-account').val(accountId);
  // clear qr when generate new account
  $('#nxter-new-pass-qrcode').html('');
  $('#nxter-new-account-qrcode').html('');
  
});

$('#nxter-print-qr-section').click(function(e) {
  e.preventDefault();
  $('#print-qr-section').removeClass('d-print-none');
  $('#print-new-section').addClass('d-print-none');

  window.print();
});

$('#nxter-print-new-section').click(function(e) {
  e.preventDefault();

  $('#print-new-section').removeClass('d-print-none');
  $('#print-qr-section').addClass('d-print-none');

  var new_random_password = $('#nxter-new-passphrase').val().trim();
  var publicKey =  NRS.getPublicKey(converters.stringToHexString(new_random_password)) ;
  var accountId = NRS.getAccountIdFromPublicKey(publicKey, true);
  // clearing
  $('#nxter-new-account-qrcode-print').html('');
  $('#nxter-new-passphrase-qrcode-print').html('');

  // for printing form
  $('#nxter-new-account-print-1').html(accountId);
  $('#nxter-new-account-public-key-print').html(publicKey);
  $('#nxter-new-account-passphrase-print').html(new_random_password);
  $('#nxter-new-account-qrcode-print').qrcode({ width: 256, height: 256, text: accountId });
  $('#nxter-new-passphrase-qrcode-print').qrcode({ width: 256, height: 256, text: new_random_password });


  window.print();
});

$('#nxter-random-passphrase').click( function(e) {
  e.preventDefault();
  var password = PassPhraseGenerator;
  password.generatePassPhrase();
  var new_random_password = password.passPhrase;

  $('#nxter-new-passphrase').val(new_random_password);

  // clear qr when generate new account
  $('#nxter-new-pass-qrcode').html('');
  $('#nxter-new-account-qrcode').html('');

  $('#nxter-generate-account').click();

});

$('#nxter-clear-new-section').click( function(e) {
  e.preventDefault();
  $('#nxter-new-passphrase').val('');
  $('#nxter-new-account').val('');
  $('#nxter-new-publickey').val('');
  $('#nxter-new-pass-qrcode').html('');
  $('#nxter-new-account-qrcode').html('');
});

$('#nxter-generate-qr-code-new-section').click( function(e) {
  e.preventDefault();
  $('#nxter-new-pass-qrcode').html('');
  $('#nxter-new-account-qrcode').html('');

  var new_pass = $('#nxter-new-passphrase').val().trim();
  var new_acc = $('#nxter-new-account').val().trim();

  $('#nxter-new-pass-qrcode').qrcode({ width: 256, height: 256, text: new_pass });
  $('#nxter-new-pass-qrcode').append('<br><strong>SECRET Passphrase</strong>');

  $('#nxter-new-account-qrcode').qrcode({ width: 256, height: 256, text: new_acc });
  $('#nxter-new-account-qrcode').append('<br><strong>Your AccountRS</strong>');


});


$('#nxter-sign-transaction').click( function(e) {
  e.preventDefault();

  // unsignedJSON
  var unsignedBytes = $('#nxter-unsigned-bytes').val().trim();
  // secert
  var secret = $('#nxter-sign-passphrase').val().trim();

  if ( secret.length < 10 ) {
    alert('Your passphrase is too weak! Please make sure that you’ve entered your passphrase correctly. If you did, it is better to create a new account with a stronger passphrase and transfer all your funds to it ASAP!');
  }

  var signature = NRS.signBytes(unsignedBytes, converters.stringToHexString(secret));

  var byteArray = converters.hexStringToByteArray(unsignedBytes);
  var sigPos = 2 * 69; // 2 * (bytes before signature from TransactionImpl newTransactionBuilder())
  var sigLen = 2 * 64;
  var payload = unsignedBytes.substr(0, sigPos) + signature + unsignedBytes.substr(sigPos + sigLen);

  $('#nxter-signed-bytes').val(payload);

  console.log(payload);
});


$('#nxter-token-generate').click(function(e) {
  e.preventDefault();
  var site = $('#nxter-token-site').val().trim();
  var pass = $('#nxter-token-passphrase').val().trim();
  if ( site.length == 0 || pass.length == 0 ) { 
    alert('Please fill the fields!');
    return;
  }

  var token = NRS.generateToken(site, pass);
  $('#nxter-token-text').val(token);
});

$('#nxter-clear-token-section').click(function(e) {
  e.preventDefault();
  $('#nxter-token-site').val('');
  $('#nxter-token-passphrase').val('');
  $('#nxter-token-text').val('');
});

$('#nxter-check-unsigned-tx').click(function(e) {
  e.preventDefault();

  var unsignedBytes = $('#nxter-unsigned-bytes').val().trim();
  var bytes = converters.hexStringToByteArray(unsignedBytes);

  // if sig != 0 transaction already sign
  var sig = converters.byteArrayToSignedInt32(bytes.slice(96, 100));

  if ( sig == 0 ) {
		// send byteArray to verify
    tx = verifyTransactionBytes(bytes);

    ttype = get_ardor_transaction_type(tx.type, tx.subtype);
    show_review(1, 'Transaction type', ttype);

    cchain  = get_chain_name(tx.chain);
    show_review(2, 'Child Chain', cchain);

    sender = NRS.getAccountIdFromPublicKey( tx.publicKey, true);
    show_review(3, 'Sender', sender);

    if ( tx.recipient > 0 ) { 
      recipient = NRS.convertNumericToRSAccountFormat(tx.recipient);
    } else {
      recipient = "Genesis Account";
    } 
    show_review(4, 'Recipient', recipient);

    amount = nqt2chain(tx.chain, tx.amountNQT);
    show_review(5,'Amount', amount + " " + cchain);

    fee = nqt2chain(tx.chain, tx.feeNQT);
    show_review(6,'Fee', fee + " " + cchain);

    console.log(tx);
    
  } else {
    alert('The text you inserted is an already-signed transaction.');
  }

});

$('#nxter-clear-sign-section').click(function(e) {
  e.preventDefault();
  show_review(1,'&nbsp;', '');show_review(2,'&nbsp; ', '');show_review(3,'&nbsp; ', '');show_review(4,'&nbsp; ', '');show_review(5,'&nbsp; ', '');show_review(6,'&nbsp; ', '');
  $('#nxter-signed-bytes').val('');
  $('#nxter-sign-passphrase').val('');
  $('#nxter-unsigned-bytes').val('');

});

//NRS.constants.GENESIS_BLOCK_ID = response.genesisBlockId;
//NRS.constants.VOTING_MODELS = response.votingModels;
//NRS.constants.MIN_BALANCE_MODELS = response.minBalanceModels;
//NRS.constants.HASH_ALGORITHMS = response.hashAlgorithms;
//NRS.constants.PHASING_HASH_ALGORITHMS = response.phasingHashAlgorithms;
//NRS.constants.MINTING_HASH_ALGORITHMS = response.mintingHashAlgorithms;
//NRS.constants.MAX_TAGGED_DATA_DATA_LENGTH = response.maxTaggedDataDataLength;
//NRS.constants.MAX_PRUNABLE_MESSAGE_LENGTH = response.maxPrunableMessageLength;
NRS.constants.EPOCH_BEGINNING = 1514764800000;
//NRS.constants.REQUEST_TYPES = response.requestTypes;
//NRS.constants.API_TAGS = response.apiTags;
//NRS.constants.SHUFFLING_STAGES = response.shufflingStages;
//NRS.constants.SHUFFLING_PARTICIPANTS_STATES = response.shufflingParticipantStates;
//NRS.constants.DISABLED_APIS = response.disabledAPIs;
//NRS.constants.DISABLED_API_TAGS = response.disabledAPITags;
//NRS.constants.PEER_STATES = response.peerStates;
//NRS.constants.LAST_KNOWN_BLOCK.id = response.lastKnownBlock.id;
//NRS.constants.LAST_KNOWN_BLOCK.height = response.lastKnownBlock.height;
//NRS.constants.PROXY_NOT_FORWARDED_REQUESTS = response.proxyNotForwardedRequests;
//NRS.constants.CHAINS = response.chains;
//NRS.constants.CHAIN_PROPERTIES = response.chainProperties;
//NRS.constants.CURRENCY_TYPES = response.currencyTypes;
//NRS.constants.PROXY_NOT_FORWARDED_REQUESTS = response.proxyNotForwardedRequests;
NRS.constants.ACCOUNT_PREFIX = "ARDOR";
NRS.constants.ACCOUNT_REGEX_STR = "^(ARDOR|NXT)-[A-Z0-9_]{4}-[A-Z0-9_]{4}-[A-Z0-9_]{4}-[A-Z0-9_]{5}";
NRS.constants.ACCOUNT_RS_MATCH = NRS.getRsAccountRegex("ARDOR");
NRS.constants.ACCOUNT_NUMERIC_MATCH = NRS.getNumericAccountRegex();
NRS.constants.ACCOUNT_MASK_ASTERIX = "ARDOR" + "-****-****-****-*****";
NRS.constants.ACCOUNT_MASK_UNDERSCORE = "ARDOR" + "-____-____-____-_____";
NRS.constants.ACCOUNT_MASK_PREFIX = "ARDOR" + "-";
NRS.constants.ACCOUNT_MASK_LEN = NRS.constants.ACCOUNT_MASK_PREFIX.length;
//NRS.constants.INITIAL_BASE_TARGET = parseInt(response.initialBaseTarget);
NRS.constants.MAX_INT_JAVA = 2147483647; 


console.log('Welcome to Nxter-Bridge Offline for Ardor');
