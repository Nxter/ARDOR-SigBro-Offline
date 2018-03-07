function show_review(num, name, value) {
  $("#review_" + num).html(name);
  $("#review_val" + num).val(value);
}

function get_chain_name(chain) {
  switch (chain) {
    case "1":
      return "ARDOR";
    case "2":
      return "IGNIS";
    case "3":
      return "AEUR";
    case "4":
      return "BITSWIFT";
    default:
      return "UNKNOWN";
  }
}

function nqt2chain(chain, nqt) {
  switch (chain) {
    case "1" :
      return parseFloat(nqt) / Math.pow(10,8);
    case "2":
      return  parseFloat(nqt) / Math.pow(10,8);
    case "3":
      return  parseFloat(nqt) / Math.pow(10,4);
    case "4":
      return  parseFloat(nqt) / Math.pow(10,8);
    default:
      return parseFloat(nqt) / Math.pow(10,8);
  }
  

}

function get_ardor_transaction_type(type, subtype) {
  var ard_types = '{"transactionTypes":{"0":{"subtypes":{"0":{"isPhasable":true,"subtype":0,"mustHaveRecipient":true,"name":"OrdinaryPayment","canHaveRecipient":true,"isGlobal":false,"type":0,"isPhasingSafe":true}}},"-1":{"subtypes":{"0":{"isPhasable":true,"subtype":0,"mustHaveRecipient":false,"name":"ChildChainBlock","canHaveRecipient":false,"type":-1,"isPhasingSafe":true}}},"1":{"subtypes":{"0":{"isPhasable":true,"subtype":0,"mustHaveRecipient":false,"name":"ArbitraryMessage","canHaveRecipient":true,"isGlobal":false,"type":1,"isPhasingSafe":false}}},"-2":{"subtypes":{"0":{"isPhasable":true,"subtype":0,"mustHaveRecipient":true,"name":"FxtPayment","canHaveRecipient":true,"type":-2,"isPhasingSafe":true}}},"2":{"subtypes":{"0":{"isPhasable":true,"subtype":0,"mustHaveRecipient":false,"name":"AssetIssuance","canHaveRecipient":false,"isGlobal":true,"type":2,"isPhasingSafe":true},"1":{"isPhasable":true,"subtype":1,"mustHaveRecipient":true,"name":"AssetTransfer","canHaveRecipient":true,"isGlobal":false,"type":2,"isPhasingSafe":true},"2":{"isPhasable":true,"subtype":2,"mustHaveRecipient":false,"name":"AskOrderPlacement","canHaveRecipient":false,"isGlobal":false,"type":2,"isPhasingSafe":true},"3":{"isPhasable":true,"subtype":3,"mustHaveRecipient":false,"name":"BidOrderPlacement","canHaveRecipient":false,"isGlobal":false,"type":2,"isPhasingSafe":true},"4":{"isPhasable":true,"subtype":4,"mustHaveRecipient":false,"name":"AskOrderCancellation","canHaveRecipient":false,"isGlobal":false,"type":2,"isPhasingSafe":true},"5":{"isPhasable":true,"subtype":5,"mustHaveRecipient":false,"name":"BidOrderCancellation","canHaveRecipient":false,"isGlobal":false,"type":2,"isPhasingSafe":true},"6":{"isPhasable":true,"subtype":6,"mustHaveRecipient":false,"name":"DividendPayment","canHaveRecipient":false,"isGlobal":false,"type":2,"isPhasingSafe":false},"7":{"isPhasable":true,"subtype":7,"mustHaveRecipient":false,"name":"AssetDelete","canHaveRecipient":false,"isGlobal":false,"type":2,"isPhasingSafe":true},"8":{"isPhasable":true,"subtype":8,"mustHaveRecipient":false,"name":"AssetIncrease","canHaveRecipient":false,"isGlobal":true,"type":2,"isPhasingSafe":false},"9":{"isPhasable":true,"subtype":9,"mustHaveRecipient":false,"name":"SetPhasingAssetControl","canHaveRecipient":false,"isGlobal":true,"type":2,"isPhasingSafe":false}}},"-3":{"subtypes":{"0":{"isPhasable":true,"subtype":0,"mustHaveRecipient":true,"name":"EffectiveBalanceLeasing","canHaveRecipient":true,"type":-3,"isPhasingSafe":true}}},"3":{"subtypes":{"0":{"isPhasable":true,"subtype":0,"mustHaveRecipient":false,"name":"DigitalGoodsListing","canHaveRecipient":false,"isGlobal":false,"type":3,"isPhasingSafe":true},"1":{"isPhasable":true,"subtype":1,"mustHaveRecipient":false,"name":"DigitalGoodsDelisting","canHaveRecipient":false,"isGlobal":false,"type":3,"isPhasingSafe":true},"2":{"isPhasable":true,"subtype":2,"mustHaveRecipient":false,"name":"DigitalGoodsPriceChange","canHaveRecipient":false,"isGlobal":false,"type":3,"isPhasingSafe":false},"3":{"isPhasable":true,"subtype":3,"mustHaveRecipient":false,"name":"DigitalGoodsQuantityChange","canHaveRecipient":false,"isGlobal":false,"type":3,"isPhasingSafe":false},"4":{"isPhasable":true,"subtype":4,"mustHaveRecipient":true,"name":"DigitalGoodsPurchase","canHaveRecipient":true,"isGlobal":false,"type":3,"isPhasingSafe":false},"5":{"isPhasable":true,"subtype":5,"mustHaveRecipient":true,"name":"DigitalGoodsDelivery","canHaveRecipient":true,"isGlobal":false,"type":3,"isPhasingSafe":false},"6":{"isPhasable":true,"subtype":6,"mustHaveRecipient":true,"name":"DigitalGoodsFeedback","canHaveRecipient":true,"isGlobal":false,"type":3,"isPhasingSafe":false},"7":{"isPhasable":true,"subtype":7,"mustHaveRecipient":true,"name":"DigitalGoodsRefund","canHaveRecipient":true,"isGlobal":false,"type":3,"isPhasingSafe":false}}},"-4":{"subtypes":{"0":{"isPhasable":true,"subtype":0,"mustHaveRecipient":false,"name":"FxtCoinExchangeOrderIssue","canHaveRecipient":false,"type":-4,"isPhasingSafe":true},"1":{"isPhasable":true,"subtype":1,"mustHaveRecipient":false,"name":"FxtCoinExchangeOrderCancel","canHaveRecipient":false,"type":-4,"isPhasingSafe":true}}},"4":{"subtypes":{"0":{"isPhasable":true,"subtype":0,"mustHaveRecipient":false,"name":"SetPhasingOnly","canHaveRecipient":false,"isGlobal":true,"type":4,"isPhasingSafe":false}}},"5":{"subtypes":{"0":{"isPhasable":true,"subtype":0,"mustHaveRecipient":false,"name":"CurrencyIssuance","canHaveRecipient":false,"isGlobal":false,"type":5,"isPhasingSafe":false},"1":{"isPhasable":true,"subtype":1,"mustHaveRecipient":false,"name":"ReserveIncrease","canHaveRecipient":false,"isGlobal":false,"type":5,"isPhasingSafe":false},"2":{"isPhasable":true,"subtype":2,"mustHaveRecipient":false,"name":"ReserveClaim","canHaveRecipient":false,"isGlobal":false,"type":5,"isPhasingSafe":true},"3":{"isPhasable":true,"subtype":3,"mustHaveRecipient":true,"name":"CurrencyTransfer","canHaveRecipient":true,"isGlobal":false,"type":5,"isPhasingSafe":true},"4":{"isPhasable":true,"subtype":4,"mustHaveRecipient":false,"name":"PublishExchangeOffer","canHaveRecipient":false,"isGlobal":false,"type":5,"isPhasingSafe":true},"5":{"isPhasable":true,"subtype":5,"mustHaveRecipient":false,"name":"ExchangeBuy","canHaveRecipient":false,"isGlobal":false,"type":5,"isPhasingSafe":true},"6":{"isPhasable":true,"subtype":6,"mustHaveRecipient":false,"name":"ExchangeSell","canHaveRecipient":false,"isGlobal":false,"type":5,"isPhasingSafe":true},"7":{"isPhasable":true,"subtype":7,"mustHaveRecipient":false,"name":"CurrencyMinting","canHaveRecipient":false,"isGlobal":false,"type":5,"isPhasingSafe":false},"8":{"isPhasable":true,"subtype":8,"mustHaveRecipient":false,"name":"CurrencyDeletion","canHaveRecipient":false,"isGlobal":false,"type":5,"isPhasingSafe":false}}},"6":{"subtypes":{"0":{"isPhasable":false,"subtype":0,"mustHaveRecipient":false,"name":"TaggedDataUpload","canHaveRecipient":false,"isGlobal":false,"type":6,"isPhasingSafe":false}}},"7":{"subtypes":{"0":{"isPhasable":true,"subtype":0,"mustHaveRecipient":false,"name":"ShufflingCreation","canHaveRecipient":false,"isGlobal":false,"type":7,"isPhasingSafe":false},"1":{"isPhasable":true,"subtype":1,"mustHaveRecipient":false,"name":"ShufflingRegistration","canHaveRecipient":false,"isGlobal":false,"type":7,"isPhasingSafe":false},"2":{"isPhasable":false,"subtype":2,"mustHaveRecipient":false,"name":"ShufflingProcessing","canHaveRecipient":false,"isGlobal":false,"type":7,"isPhasingSafe":false},"3":{"isPhasable":false,"subtype":3,"mustHaveRecipient":false,"name":"ShufflingRecipients","canHaveRecipient":false,"isGlobal":false,"type":7,"isPhasingSafe":false},"4":{"isPhasable":false,"subtype":4,"mustHaveRecipient":false,"name":"ShufflingVerification","canHaveRecipient":false,"isGlobal":false,"type":7,"isPhasingSafe":false},"5":{"isPhasable":false,"subtype":5,"mustHaveRecipient":false,"name":"ShufflingCancellation","canHaveRecipient":false,"isGlobal":false,"type":7,"isPhasingSafe":false}}},"8":{"subtypes":{"0":{"isPhasable":true,"subtype":0,"mustHaveRecipient":false,"name":"AliasAssignment","canHaveRecipient":false,"isGlobal":false,"type":8,"isPhasingSafe":false},"1":{"isPhasable":true,"subtype":1,"mustHaveRecipient":false,"name":"AliasSell","canHaveRecipient":true,"isGlobal":false,"type":8,"isPhasingSafe":false},"2":{"isPhasable":true,"subtype":2,"mustHaveRecipient":true,"name":"AliasBuy","canHaveRecipient":true,"isGlobal":false,"type":8,"isPhasingSafe":false},"3":{"isPhasable":true,"subtype":3,"mustHaveRecipient":false,"name":"AliasDelete","canHaveRecipient":false,"isGlobal":false,"type":8,"isPhasingSafe":false}}},"9":{"subtypes":{"0":{"isPhasable":true,"subtype":0,"mustHaveRecipient":false,"name":"PollCreation","canHaveRecipient":false,"isGlobal":false,"type":9,"isPhasingSafe":false},"1":{"isPhasable":true,"subtype":1,"mustHaveRecipient":false,"name":"VoteCasting","canHaveRecipient":false,"isGlobal":false,"type":9,"isPhasingSafe":false},"2":{"isPhasable":true,"subtype":2,"mustHaveRecipient":false,"name":"PhasingVoteCasting","canHaveRecipient":false,"isGlobal":false,"type":9,"isPhasingSafe":true}}},"10":{"subtypes":{"0":{"isPhasable":true,"subtype":0,"mustHaveRecipient":false,"name":"AccountInfo","canHaveRecipient":false,"isGlobal":true,"type":10,"isPhasingSafe":true},"1":{"isPhasable":true,"subtype":1,"mustHaveRecipient":true,"name":"AccountProperty","canHaveRecipient":true,"isGlobal":true,"type":10,"isPhasingSafe":true},"2":{"isPhasable":true,"subtype":2,"mustHaveRecipient":true,"name":"AccountPropertyDelete","canHaveRecipient":true,"isGlobal":true,"type":10,"isPhasingSafe":true}}},"11":{"subtypes":{"0":{"isPhasable":true,"subtype":0,"mustHaveRecipient":false,"name":"CoinExchangeOrderIssue","canHaveRecipient":false,"isGlobal":false,"type":11,"isPhasingSafe":true},"1":{"isPhasable":true,"subtype":1,"mustHaveRecipient":false,"name":"CoinExchangeOrderCancel","canHaveRecipient":false,"isGlobal":false,"type":11,"isPhasingSafe":true}}}}}';

  try {
    var ATT = JSON.parse(ard_types);
    var tt = ATT['transactionTypes'][type]['subtypes'][subtype]['name'];
  } catch (err) {
    tt = 'Undefined';
  }

  return tt;

}

function verifyTransactionBytes( byteArray ) {
  // NRS.verifyTransactionBytes = function (byteArray, requestType, data, attachment, isVerifyECBlock) 
  // nrs.server.js , line 577
	var transaction = {};
	var pos = 0;
  var length = 0;

	transaction.chain = String(converters.byteArrayToSignedInt32(byteArray, pos));
	pos += 4;
	transaction.type = byteArray[pos++];
	// Patch until I find the official way of converting JS byte to signed byte
	if (transaction.type >= 128) {
			transaction.type -= 256;
	}
	transaction.subtype = byteArray[pos++];
	transaction.version = byteArray[pos++];
	transaction.timestamp = String(converters.byteArrayToSignedInt32(byteArray, pos));
	pos += 4;
	transaction.deadline = String(converters.byteArrayToSignedShort(byteArray, pos));
	pos += 2;
	transaction.publicKey = converters.byteArrayToHexString(byteArray.slice(pos, pos + 32));
	pos += 32;
	transaction.recipient = String(converters.byteArrayToBigInteger(byteArray, pos));
	pos += 8;
	transaction.amountNQT = String(converters.byteArrayToBigInteger(byteArray, pos));
	pos += 8;
	transaction.feeNQT = String(converters.byteArrayToBigInteger(byteArray, pos));
	pos += 8;
	transaction.signature = byteArray.slice(pos, pos + 64);
	pos += 64;
	transaction.ecBlockHeight = String(converters.byteArrayToSignedInt32(byteArray, pos));
	pos += 4;
	transaction.ecBlockId = String(converters.byteArrayToBigInteger(byteArray, pos));
	pos += 8;
	transaction.flags = String(converters.byteArrayToSignedInt32(byteArray, pos));
	pos += 4;

  // get requestType 
  requestType = get_ardor_transaction_type(transaction.type, transaction.subtype);

  //has empty attachment, so no attachmentVersion byte... line 645 in nrs.server.js 
  if ( !(requestType == "FxtPayment" || requestType == "OrdinaryPayment" || requestType == "ArbitraryMessage" ) ) {
    pos ++;
  }

  switch (requestType) {
    case "FxtPayment":
    case "OrdinaryPayment":
        break;
    case "ArbitraryMessage":
        break;
    case "AliasAssignment":
        length = parseInt(byteArray[pos], 10);
        pos++;
        transaction.aliasName = converters.byteArrayToString(byteArray, pos, length);
        pos += length;
        length = converters.byteArrayToSignedShort(byteArray, pos);
        pos += 2;
        transaction.aliasURI = converters.byteArrayToString(byteArray, pos, length);
        pos += length;
        break;
    case "PollCreation":
        length = converters.byteArrayToSignedShort(byteArray, pos);
        pos += 2;
        transaction.name = converters.byteArrayToString(byteArray, pos, length);
        pos += length;
        length = converters.byteArrayToSignedShort(byteArray, pos);
        pos += 2;
        transaction.description = converters.byteArrayToString(byteArray, pos, length);
        pos += length;
        transaction.finishHeight = converters.byteArrayToSignedInt32(byteArray, pos);
        pos += 4;
        var nr_options = byteArray[pos];
        pos++;

        for (i = 0; i < nr_options; i++) {
            var optionLength = converters.byteArrayToSignedShort(byteArray, pos);
            pos += 2;
            transaction["option" + (i < 10 ? "0" + i : i)] = converters.byteArrayToString(byteArray, pos, optionLength);
            pos += optionLength;
        }
        transaction.votingModel = String(byteArray[pos]);
        pos++;
        transaction.minNumberOfOptions = String(byteArray[pos]);
        pos++;
        transaction.maxNumberOfOptions = String(byteArray[pos]);
        pos++;
        transaction.minRangeValue = String(byteArray[pos]);
        pos++;
        transaction.maxRangeValue = String(byteArray[pos]);
        pos++;
        transaction.minBalance = String(converters.byteArrayToBigInteger(byteArray, pos));
        pos += 8;
        transaction.minBalanceModel = String(byteArray[pos]);
        pos++;
        transaction.holding = String(converters.byteArrayToBigInteger(byteArray, pos));
        pos += 8;

        break;
    case "VoteCasting":
        transaction.poll = String(converters.byteArrayToBigInteger(byteArray, pos));
        pos += 8;
        var voteLength = byteArray[pos];
        pos++;
        transaction.votes = [];

        for (i = 0; i < voteLength; i++) {
            transaction["vote" + (i < 10 ? "0" + i : i)] = byteArray[pos];
            pos++;
        }
        break;
    case "AccountInfo":
        length = parseInt(byteArray[pos], 10);
        pos++;
        transaction.name = converters.byteArrayToString(byteArray, pos, length);
        pos += length;
        length = converters.byteArrayToSignedShort(byteArray, pos);
        pos += 2;
        transaction.description = converters.byteArrayToString(byteArray, pos, length);
        pos += length;
        break;
    case "AliasSell":
        length = parseInt(byteArray[pos], 10);
        pos++;
        transaction.alias = converters.byteArrayToString(byteArray, pos, length);
        pos += length;
        transaction.priceNQT = String(converters.byteArrayToBigInteger(byteArray, pos));
        pos += 8;
        break;
    case "AliasBuy":
        length = parseInt(byteArray[pos], 10);
        pos++;
        transaction.alias = converters.byteArrayToString(byteArray, pos, length);
        pos += length;
        break;
    case "AliasDelete":
        length = parseInt(byteArray[pos], 10);
        pos++;
        transaction.alias = converters.byteArrayToString(byteArray, pos, length);
        pos += length;
        break;
    case "PhasingVoteCasting":
        var fullHashesLength = byteArray[pos];
        pos++;
        var phasedTransaction = converters.byteArrayToSignedInt32(byteArray, pos);
        pos += 4;
        phasedTransaction += ":" + converters.byteArrayToHexString(byteArray.slice(pos, pos + 32));
        pos += 32;
        var numberOfSecrets = converters.byteArrayToSignedShort(byteArray, pos);
        pos += 2;
        // We only support one secret per phasing model
        transaction.revealedSecretLength = converters.byteArrayToSignedShort(byteArray, pos);
        pos += 2;
        if (transaction.revealedSecretLength > 0) {
            transaction.revealedSecret = converters.byteArrayToHexString(byteArray.slice(pos, pos + transaction.revealedSecretLength));
            pos += transaction.revealedSecretLength;
        }
        break;
    case "AccountProperty":
        length = byteArray[pos];
        pos++;
        pos += length;
        length = byteArray[pos];
        pos++;
        pos += length;
        break;
    case "AccountPropertyDelete":
        // no way to validate the property id, just skip it
        String(converters.byteArrayToBigInteger(byteArray, pos));
        pos += 8;
        break;
    case "AssetIssuance":
        length = byteArray[pos];
        pos++;
        transaction.name = converters.byteArrayToString(byteArray, pos, length);
        pos += length;
        length = converters.byteArrayToSignedShort(byteArray, pos);
        pos += 2;
        transaction.description = converters.byteArrayToString(byteArray, pos, length);
        pos += length;
        transaction.quantityQNT = String(converters.byteArrayToBigInteger(byteArray, pos));
        pos += 8;
        transaction.decimals = String(byteArray[pos]);
        pos++;
        break;
    case "AssetTransfer":
        transaction.asset = String(converters.byteArrayToBigInteger(byteArray, pos));
        pos += 8;
        transaction.quantityQNT = String(converters.byteArrayToBigInteger(byteArray, pos));
        pos += 8;
        break;
    case "AskOrderPlacement":
    case "BidOrderPlacement":
        transaction.asset = String(converters.byteArrayToBigInteger(byteArray, pos));
        pos += 8;
        transaction.quantityQNT = String(converters.byteArrayToBigInteger(byteArray, pos));
        pos += 8;
        transaction.priceNQTPerShare = String(converters.byteArrayToBigInteger(byteArray, pos));
        pos += 8;
        break;
    case "AskOrderCancellation":
    case "BidOrderCancellation":
        transaction.order = String(converters.byteArrayToBigInteger(byteArray, pos));
        pos += 8;
        break;
    case "AssetDelete":
        transaction.asset = String(converters.byteArrayToBigInteger(byteArray, pos));
        pos += 8;
        transaction.quantityQNT = String(converters.byteArrayToBigInteger(byteArray, pos));
        pos += 8;
        break;
    case "AssetIncrease":
        transaction.asset = String(converters.byteArrayToBigInteger(byteArray, pos));
        pos += 8;
        transaction.quantityQNT = String(converters.byteArrayToBigInteger(byteArray, pos));
        pos += 8;
        break;
    case "DividendPayment":
        transaction.holding = String(converters.byteArrayToBigInteger(byteArray, pos));
        pos += 8;
        transaction.holdingType = String(byteArray[pos]);
        pos ++;
        transaction.asset = String(converters.byteArrayToBigInteger(byteArray, pos));
        pos += 8;
        transaction.height = String(converters.byteArrayToSignedInt32(byteArray, pos));
        pos += 4;
        transaction.amountNQTPerShare = String(converters.byteArrayToBigInteger(byteArray, pos));
        pos += 8;
        break;
    case "SetPhasingAssetControl":
        pos += 8;
        break;
    case "DigitalGoodsListing":
        length = converters.byteArrayToSignedShort(byteArray, pos);
        pos += 2;
        transaction.name = converters.byteArrayToString(byteArray, pos, length);
        pos += length;
        length = converters.byteArrayToSignedShort(byteArray, pos);
        pos += 2;
        transaction.description = converters.byteArrayToString(byteArray, pos, length);
        pos += length;
        length = converters.byteArrayToSignedShort(byteArray, pos);
        pos += 2;
        transaction.tags = converters.byteArrayToString(byteArray, pos, length);
        pos += length;
        transaction.quantity = String(converters.byteArrayToSignedInt32(byteArray, pos));
        pos += 4;
        transaction.priceNQT = String(converters.byteArrayToBigInteger(byteArray, pos));
        pos += 8;
        break;
    case "DigitalGoodsDelisting":
        transaction.goods = String(converters.byteArrayToBigInteger(byteArray, pos));
        pos += 8;
        break;
    case "DigitalGoodsPriceChange":
        transaction.goods = String(converters.byteArrayToBigInteger(byteArray, pos));
        pos += 8;
        transaction.priceNQT = String(converters.byteArrayToBigInteger(byteArray, pos));
        pos += 8;
        break;
    case "DigitalGoodsQuantityChange":
        transaction.goods = String(converters.byteArrayToBigInteger(byteArray, pos));
        pos += 8;
        transaction.deltaQuantity = String(converters.byteArrayToSignedInt32(byteArray, pos));
        pos += 4;
        break;
    case "DigitalGoodsPurchase":
        transaction.goods = String(converters.byteArrayToBigInteger(byteArray, pos));
        pos += 8;
        transaction.quantity = String(converters.byteArrayToSignedInt32(byteArray, pos));
        pos += 4;
        transaction.priceNQT = String(converters.byteArrayToBigInteger(byteArray, pos));
        pos += 8;
        transaction.deliveryDeadlineTimestamp = String(converters.byteArrayToSignedInt32(byteArray, pos));
        pos += 4;
        break;
    case "DigitalGoodsDelivery":
        transaction.purchase = String(converters.byteArrayToBigInteger(byteArray, pos));
        pos += 8;
        var encryptedGoodsLength = converters.byteArrayToSignedShort(byteArray, pos);
        var goodsLength = converters.byteArrayToSignedInt32(byteArray, pos);
        transaction.goodsIsText = goodsLength < 0; // ugly hack??
        if (goodsLength < 0) {
            goodsLength &= NRS.constants.MAX_INT_JAVA;
        }
        pos += 4;
        transaction.goodsData = converters.byteArrayToHexString(byteArray.slice(pos, pos + encryptedGoodsLength));
        pos += encryptedGoodsLength;
        transaction.goodsNonce = converters.byteArrayToHexString(byteArray.slice(pos, pos + 32));
        pos += 32;
        transaction.discountNQT = String(converters.byteArrayToBigInteger(byteArray, pos));
        pos += 8;
        var goodsIsText = (transaction.goodsIsText ? "true" : "false");
        break;
    case "DigitalGoodsFeedback":
        transaction.purchase = String(converters.byteArrayToBigInteger(byteArray, pos));
        pos += 8;
        break;
    case "DigitalGoodsRefund":
        transaction.purchase = String(converters.byteArrayToBigInteger(byteArray, pos));
        pos += 8;
        transaction.refundNQT = String(converters.byteArrayToBigInteger(byteArray, pos));
        pos += 8;
        break;
    case "EffectiveBalanceLeasing":
        transaction.period = String(converters.byteArrayToSignedShort(byteArray, pos));
        pos += 2;
        break;
    case "SetPhasingOnly":
        break;
    case "CurrencyIssuance":
        length = byteArray[pos];
        pos++;
        transaction.name = converters.byteArrayToString(byteArray, pos, length);
        pos += length;
        var codeLength = byteArray[pos];
        pos++;
        transaction.code = converters.byteArrayToString(byteArray, pos, codeLength);
        pos += codeLength;
        length = converters.byteArrayToSignedShort(byteArray, pos);
        pos += 2;
        transaction.description = converters.byteArrayToString(byteArray, pos, length);
        pos += length;
        transaction.type = String(byteArray[pos]);
        pos++;
        transaction.initialSupplyQNT = String(converters.byteArrayToBigInteger(byteArray, pos));
        pos += 8;
        transaction.reserveSupplyQNT = String(converters.byteArrayToBigInteger(byteArray, pos));
        pos += 8;
        transaction.maxSupplyQNT = String(converters.byteArrayToBigInteger(byteArray, pos));
        pos += 8;
        transaction.issuanceHeight = String(converters.byteArrayToSignedInt32(byteArray, pos));
        pos += 4;
        transaction.minReservePerUnitNQT = String(converters.byteArrayToBigInteger(byteArray, pos));
        pos += 8;
        transaction.minDifficulty = String(byteArray[pos]);
        pos++;
        transaction.maxDifficulty = String(byteArray[pos]);
        pos++;
        transaction.ruleset = String(byteArray[pos]);
        pos++;
        transaction.algorithm = String(byteArray[pos]);
        pos++;
        transaction.decimals = String(byteArray[pos]);
        pos++;
        break;
    case "ReserveIncrease":
        transaction.currency = String(converters.byteArrayToBigInteger(byteArray, pos));
        pos += 8;
        transaction.amountPerUnitNQT = String(converters.byteArrayToBigInteger(byteArray, pos));
        pos += 8;
        break;
    case "ReserveClaim":
        transaction.currency = String(converters.byteArrayToBigInteger(byteArray, pos));
        pos += 8;
        transaction.unitsQNT = String(converters.byteArrayToBigInteger(byteArray, pos));
        pos += 8;
        break;
    case "CurrencyTransfer":
        transaction.currency = String(converters.byteArrayToBigInteger(byteArray, pos));
        pos += 8;
        transaction.unitsQNT = String(converters.byteArrayToBigInteger(byteArray, pos));
        pos += 8;
        break;
    case "PublishExchangeOffer":
        transaction.currency = String(converters.byteArrayToBigInteger(byteArray, pos));
        pos += 8;
        transaction.buyRateNQTPerUnit = String(converters.byteArrayToBigInteger(byteArray, pos));
        pos += 8;
        transaction.sellRateNQTPerUnit = String(converters.byteArrayToBigInteger(byteArray, pos));
        pos += 8;
        transaction.totalBuyLimitQNT = String(converters.byteArrayToBigInteger(byteArray, pos));
        pos += 8;
        transaction.totalSellLimitQNT = String(converters.byteArrayToBigInteger(byteArray, pos));
        pos += 8;
        transaction.initialBuySupplyQNT = String(converters.byteArrayToBigInteger(byteArray, pos));
        pos += 8;
        transaction.initialSellSupplyQNT = String(converters.byteArrayToBigInteger(byteArray, pos));
        pos += 8;
        transaction.expirationHeight = String(converters.byteArrayToSignedInt32(byteArray, pos));
        pos += 4;
        break;
    case "ExchangeBuy":
        transaction.currency = String(converters.byteArrayToBigInteger(byteArray, pos));
        pos += 8;
        transaction.rateNQTPerUnit = String(converters.byteArrayToBigInteger(byteArray, pos));
        pos += 8;
        transaction.unitsQNT = String(converters.byteArrayToBigInteger(byteArray, pos));
        pos += 8;
        break;
    case "ExchangeSell":
        transaction.currency = String(converters.byteArrayToBigInteger(byteArray, pos));
        pos += 8;
        transaction.rateNQTPerUnit = String(converters.byteArrayToBigInteger(byteArray, pos));
        pos += 8;
        transaction.unitsQNT = String(converters.byteArrayToBigInteger(byteArray, pos));
        pos += 8;
        break;
    case "CurrencyMinting":
        transaction.currency = String(converters.byteArrayToBigInteger(byteArray, pos));
        pos += 8;
        transaction.nonce = String(converters.byteArrayToBigInteger(byteArray, pos));
        pos += 8;
        transaction.unitsQNT = String(converters.byteArrayToBigInteger(byteArray, pos));
        pos += 8;
        transaction.counter = String(converters.byteArrayToBigInteger(byteArray, pos));
        pos += 8;
        break;
    case "CurrencyDeletion":
        transaction.currency = String(converters.byteArrayToBigInteger(byteArray, pos));
        pos += 8;
        break;
    case "TaggedDataUpload":
        pos++;
        pos += 32;
        break;
    case "ShufflingCreation":
        var holding = String(converters.byteArrayToBigInteger(byteArray, pos));
        pos += 8;
        var holdingType = String(byteArray[pos]);
        pos++;
        var amount = String(converters.byteArrayToBigInteger(byteArray, pos));
        pos += 8;
        var participantCount = String(byteArray[pos]);
        pos++;
        var registrationPeriod = converters.byteArrayToSignedShort(byteArray, pos);
        pos += 2;
        break;
    case "FxtCoinExchangeOrderIssue":
    case "CoinExchangeOrderIssue":
        var chain = String(converters.byteArrayToSignedInt32(byteArray, pos));
        pos += 4;
        var exchange = String(converters.byteArrayToSignedInt32(byteArray, pos));
        pos += 4;
        var quantityQNT = String(converters.byteArrayToBigInteger(byteArray, pos));
        pos += 8;
        var priceNQTPerCoin = String(converters.byteArrayToBigInteger(byteArray, pos));
        pos += 8;
        break;
    case "FxtCoinExchangeOrderCancel":
    case "CoinExchangeOrderCancel":
        var orderHash = converters.byteArrayToHexString(byteArray.slice(pos, pos + 32));
        pos += 32;
        break;
    case "bundleTransactions":
        var isPrunable = byteArray[pos];
        pos++;
        chain = String(converters.byteArrayToSignedInt32(byteArray, pos));
        pos += 4;
        serverHash = converters.byteArrayToHexString(byteArray.slice(pos, pos + 32));
        sha256 = CryptoJS.algo.SHA256.create();
        // We assume here that only one transaction was bundled
        sha256.update(converters.byteArrayToWordArrayEx(converters.hexStringToByteArray(data.transactionFullHash)));
        hashWords = sha256.finalize();
        calculatedHash = converters.wordArrayToByteArrayEx(hashWords);
        pos += 32;
        break;
    default:
        //invalid requestType..
        return false;
  }

  return transaction;

}
