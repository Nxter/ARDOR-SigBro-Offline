// Wallet -> I have an account
$('#nxter-generate-account').click( function(e) {
  e.preventDefault();

  $('#nxter-new-passphrase').val('');
  $('#nxter-new-account').val('');
  $('#nxter-new-publickey').val('');
  $('#nxter-new-pass-qrcode').html('');
  $('#nxter-new-account-qrcode').html('');
  $('#nxter-new-section').addClass('d-none');

  $('#nxter-generate-own-account-tip').removeClass('d-none');
});

// Wallet -> create new
$('#nxter-random-passphrase').click( function(e) {
  e.preventDefault();
  var password = PassPhraseGenerator;
  password.generatePassPhrase();
  var new_random_password = password.passPhrase;

  $('#nxter-new-passphrase').val(new_random_password);

  var new_random_password = $('#nxter-new-passphrase').val().trim();
  var publicKey =  NRS.getPublicKey(converters.stringToHexString(new_random_password)) ;
  var accountId = NRS.getAccountIdFromPublicKey(publicKey, true);
  $('#nxter-new-publickey').val(publicKey);
  $('#nxter-new-account').val(accountId);

  // generate qr
  $('#nxter-new-pass-qrcode').html('');
  $('#nxter-new-account-qrcode').html('');

  $('#nxter-new-section').removeClass('d-none');

  $('#nxter-new-pass-qrcode').qrcode({ width: 220, height: 220, text: new_random_password });
  $('#nxter-new-account-qrcode').qrcode({ width: 220, height: 220, text: accountId });
  // hide hint 
  $('#nxter-generate-own-account-tip').addClass('d-none');
});

// Wallet -> Clear
$('#nxter-clear-new-section').click( function(e) {
  e.preventDefault();
  $('#nxter-new-passphrase').val('');
  $('#nxter-new-account').val('');
  $('#nxter-new-publickey').val('');
  $('#nxter-new-pass-qrcode').html('');
  $('#nxter-new-account-qrcode').html('');
  $('#nxter-new-section').addClass('d-none');

  $('#nxter-generate-own-account-tip').addClass('d-none');
});

function generate_account_and_qr() {
  $('#nxter-generate-own-account-tip').removeClass('d-none');
  var new_random_password = $('#nxter-new-passphrase').val().trim();
  var publicKey =  NRS.getPublicKey(converters.stringToHexString(new_random_password)) ;
  var accountId = NRS.getAccountIdFromPublicKey(publicKey, true);
  $('#nxter-new-publickey').val(publicKey);
  $('#nxter-new-account').val(accountId);

  // generate qr
  $('#nxter-new-pass-qrcode').html('');
  $('#nxter-new-account-qrcode').html('');

  $('#nxter-new-section').removeClass('d-none');

  $('#nxter-new-pass-qrcode').qrcode({ width: 220, height: 220, text: new_random_password });
  $('#nxter-new-account-qrcode').qrcode({ width: 220, height: 220, text: accountId });
}

// Wallet -> Autogenerate
$('#nxter-new-passphrase').keyup( function(e) {
  generate_account_and_qr();
});

// Wallet -> Print
$('#nxter-print-new-section').click(function(e) {
  e.preventDefault();
  // clear old data
  $('#nxter-new-print-account').html('');
  $('#nxter-new-print-account-qrcode').html('');
  $('#nxter-new-print-account-passphrase-qrcode').html('');
  // update data for accountRS
  accRS = $('#nxter-new-account').val();
  $('#nxter-new-print-account').html( accRS );
  $('#nxter-new-print-account-qrcode').qrcode({ width: 180, height: 180, text: accRS });
  // update data for private section
  pubK = $('#nxter-new-publickey').val().trim();
  prvK = $('#nxter-new-passphrase').val().trim();
  $('#nxter-new-print-account-public-key').html( pubK );
  $('#nxter-new-print-account-passphrase').html( prvK );
  $('#nxter-new-print-account-passphrase-qrcode').qrcode({ width: 180, height: 180, text: prvK });;
  // hide other printable fields
  $('#nxter-section-print-qr-section').removeClass('d-print-block');
  // show form for print
  $('#nxter-section-print-new-section').addClass('d-print-block') 

  window.print();
});

// ------------------------------------------------------------------------------

// Token -> Help
$('#nxter-token-help-sign').click(function(e) {
  e.preventDefault();
  if ( $('#nxter-token-help').hasClass('d-none') ) {
    $('#nxter-token-help').removeClass('d-none');
  } else {
    $('#nxter-token-help').addClass('d-none');
  }
});

// Token -> Generate
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

// Token -> Clear
$('#nxter-clear-token-section').click(function(e) {
  e.preventDefault();
  $('#nxter-token-site').val('');
  $('#nxter-token-passphrase').val('');
  $('#nxter-token-text').val('');
});

// ------------------------------------------------------------------------------

// QR -> Clear
$('#nxter-clear-qr-section').click( function(e) {
  e.preventDefault();
  $('#nxter-qrcode').html('');
  $('#nxter-text-for-qr-code').val('');
  $('#nxter-qr-section').addClass('d-none');
});

// QR -> Generate
$('#nxter-text-for-qr-code').keyup( function(e) {
  var text4qr = $('#nxter-text-for-qr-code').val().trim();
  $('#nxter-qr-qrcode').html('');
  $('#nxter-qr-qrcode').qrcode({ width: 220, height: 220, text: text4qr });
  $('#nxter-qr-section').removeClass('d-none');
});


$('#nxter-generate-qr-code').click( function(e) {
  e.preventDefault();
  var text4qr = $('#nxter-text-for-qr-code').val().trim();
  $('#nxter-qr-qrcode').html('');
  $('#nxter-qr-qrcode').qrcode({ width: 220, height: 220, text: text4qr });
  $('#nxter-qr-section').removeClass('d-none');

});

// QR -> Print
$('#nxter-print-qr-section').click(function(e) {
  e.preventDefault();

  var text4qr = $('#nxter-text-for-qr-code').val().trim();
  $('#nxter-qr-print-qrcode').html('');
  $('#nxter-qr-print-qrcode').qrcode({ width: 180, height: 180, text: text4qr });
  $('#nxter-qr-print-account').html(text4qr);

  // hide other printable fields
  $('#nxter-section-print-new-section').removeClass('d-print-block') 
  // show form for print
  $('#nxter-section-print-qr-section').addClass('d-print-block');



  window.print();
});

// QR -> Help
$('#nxter-qr-help-sign').click(function(e) {
  e.preventDefault();
  if ( $('#nxter-qr-help').hasClass('d-none') ) {
    $('#nxter-qr-help').removeClass('d-none');
  } else {
    $('#nxter-qr-help').addClass('d-none');
  }
});

// ------------------------------------------------------------------------------

// Offline -> Help
$('#nxter-offline-help-sign').click(function(e) {
  e.preventDefault();

  if ( $('#nxter-offline-help').hasClass('d-none') ) {
    $('#nxter-offline-help').removeClass('d-none');
  } else {
    $('#nxter-offline-help').addClass('d-none');
  }

});

// OFFLINE -> Sign
$('#nxter-sign-transaction').click( function(e) {
  e.preventDefault();

  // unsignedJSON
  var unsignedBytes = $('#nxter-unsigned-bytes').val().trim();
  // secert
  var secret = $('#nxter-sign-passphrase').val().trim();

  if ( secret.length < 10 ) {
    alert('Your passphrase is too weak! Please make sure that you have entered your passphrase correctly. If you did, it is better to create a new account with a stronger passphrase and transfer all your funds to it!');
  }

  var signature = NRS.signBytes(unsignedBytes, converters.stringToHexString(secret));

  var byteArray = converters.hexStringToByteArray(unsignedBytes);
  var sigPos = 2 * 69; // 2 * (bytes before signature from TransactionImpl newTransactionBuilder())
  var sigLen = 2 * 64;
  var payload = unsignedBytes.substr(0, sigPos) + signature + unsignedBytes.substr(sigPos + sigLen);

  $('#nxter-signed-bytes').val(payload);

  //console.log(payload);
});

// OFFLINE -> Check
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

    //console.log(tx);
    
  } else {
    alert('The text you inserted is an already-signed transaction.');
  }

});

// OFFLINE -> clear
$('#nxter-clear-sign-transaction').click(function(e) {
  e.preventDefault();
  show_review(1,'&nbsp;', '');show_review(2,'&nbsp; ', '');show_review(3,'&nbsp; ', '');show_review(4,'&nbsp; ', '');show_review(5,'&nbsp; ', '');show_review(6,'&nbsp; ', '');
  $('#nxter-signed-bytes').val('');
  $('#nxter-sign-passphrase').val('');
  $('#nxter-unsigned-bytes').val('');

});

// MENU -> Smooth scroll
$('.nav-link').click( function(e) {
  e.preventDefault();
  url = $(this).data('url');
  pos_y = $("[name = '" + url + "']").position().top;
  $(window).scrollTop( pos_y - 120 );
});

// Account -> show/hide password
$('#nxter-new-passphrase-switcher').click( function(e) {
  if ( $('#nxter-new-passphrase').attr('type') === 'password' ) { 
    $('#nxter-new-passphrase').prop('type', 'text'); 
    $('#nxter-new-passphrase-switcher').html('Hide');
  } else {
    $('#nxter-new-passphrase').prop('type', 'password'); 
    $('#nxter-new-passphrase-switcher').html('Show');
  }
});

// TOKEN -> show/hide password
$('#nxter-token-passphrase-switcher').click( function(e) {
  if ( $('#nxter-token-passphrase').attr('type') === 'password' ) { 
    $('#nxter-token-passphrase').prop('type', 'text'); 
    $('#nxter-token-passphrase-switcher').html('Hide');
  } else {
    $('#nxter-token-passphrase').prop('type', 'password'); 
    $('#nxter-token-passphrase-switcher').html('Show');
  }
});
// SIGN -> show/hide password
$('#nxter-sign-passphrase-switcher').click( function(e) {
  if ( $('#nxter-sign-passphrase').attr('type') === 'password' ) { 
    $('#nxter-sign-passphrase').prop('type', 'text'); 
    $('#nxter-sign-passphrase-switcher').html('Hide');
  } else {
    $('#nxter-sign-passphrase').prop('type', 'password'); 
    $('#nxter-sign-passphrase-switcher').html('Show');
  }
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


console.log('Welcome to SIGBRO OFFLINE for Ardor');
