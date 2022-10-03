
import { 
  TokenCreateTransaction,
  AccountId,
	PrivateKey,
	Client,
  TokenId,
  Hbar,
  TransferTransaction,
  AccountBalanceQuery,
	FileCreateTransaction,
	ContractCreateTransaction,
	ContractFunctionParameters,
	ContractExecuteTransaction,
 } from '@hashgraph/sdk';


import { HashConnect } from 'hashconnect';
import App from './Components/Me.jsx';
  

// let accountId = AccountId.fromString("0.0.48149218");
// const privateKey = PrivateKey.fromString("302e020100300506032b657004220420e3e5c08fd7fe00d135d097bcbd600bc5ee39ac89e3aeebfdf769766a624a6898");
// const treasuryKey = PrivateKey.fromString("302e020100300506032b657004220420e3e5c08fd7fe00d135d097bcbd600bc5ee39ac89e3aeebfdf769766a624a6898");

// const client = Client.forTestnet().setOperator(accountId, privateKey);
// let tokenId = TokenId.fromString("0.0.48150045")


// import {  HashConnectTypes, MessageTypes } from 'hashconnect';

let accountId =""

let saveData = {
    topic: "",
    pairingString: "",
    privateKey: "",
    pairedWalletData: null,
    pairedAccounts: []
}

let appMetadata = {
    name: "dApp Example",
    description: "An example hedera dApp",
    icon: "https://www.hashpack.app/img/logo.svg"
}

    
let hashconnect = new HashConnect();

 export async function connect() {

   
        //first init and store the private for later
        let initData = await hashconnect.init(appMetadata);
        saveData.privateKey = initData.privKey;

        //then connect, storing the new topic for later
        let state = await hashconnect.connect();
        saveData.topic = state.topic;

        console.log('\nTopic is: $(saveData.topic)\n')
        
        //generate a pairing string, which you can display and generate a QR code from
        saveData.pairingString = hashconnect.generatePairingString(state, "testnet", false);
        
        //find any supported local wallets
       const result = hashconnect.findLocalWallets();
    //    provider = hashconnect.getProvider(network, topic, accountId);
    //    let balance = await provider.getAccountBalance(accountId);
    //    signer = hashconnect.getSigner(provider);

       console.log(state);

       console.log(result + 'result')
       hashconnect.connectToLocalWallet(saveData.pairingString)


       hashconnect.pairingEvent.once(pairingData => {
        pairingData.accountIds.forEach(id => {
            accountId =id 
            console.log(accountId)
        })
        document.getElementById('connect').innerHTML = `Account ID: ${accountId}`
       })
    }
    


// let accountId = AccountId.fromString("0.0.48149218");
// const privateKey = PrivateKey.fromString("302e020100300506032b657004220420e3e5c08fd7fe00d135d097bcbd600bc5ee39ac89e3aeebfdf769766a624a6898");
// const treasuryKey = PrivateKey.fromString("302e020100300506032b657004220420e3e5c08fd7fe00d135d097bcbd600bc5ee39ac89e3aeebfdf769766a624a6898");

// const client = Client.forTestnet().setOperator(accountId, privateKey);
// let tokenId = TokenId.fromString("0.0.48150045")

//     export async function SendToken() {
//     //Create the transfer transaction
// const transaction =  new TransferTransaction()
// ._addTokenTransfer(tokenId, accountId, -10)
// ._addTokenTransfer(tokenId, "0.0.48149330", 10 )
// .freezeWith(client);
// const signTx = await transaction.sign(privateKey);
// const txResponse = await signTx.execute(client);
// const receipt = await txResponse.getReceipt(client);
// const transactionStatus = receipt.status;

// console.log("The transaction consensus status " +transactionStatus.toString());



//       }
//     /////////////////////////CREATE TOKEN//////////////////
//    export async function Createtoken() {
//       //Create the transaction and freeze for manual signing
// const transaction = await new TokenCreateTransaction()
// .setTokenName("Lemon")
// .setTokenSymbol("LMN")
// .setTreasuryAccountId(accountId)
// .setInitialSupply(5000)
// .setAdminKey(privateKey)
// .setMaxTransactionFee(new Hbar(30)) //Change the default max transaction fee
// .freezeWith(client);

// //Sign the transaction with the token adminKey and the token treasury account private key
// const signTx =  await (await transaction.sign(privateKey)).sign(treasuryKey);

// //Sign the transaction with the client operator private key and submit to a Hedera network
// const txResponse = await signTx.execute(client);

// //Get the receipt of the transaction
// const receipt = await txResponse.getReceipt(client);

// //Get the token ID from the receipt
// const tokenId = receipt.tokenId;

// console.log("The new token ID is " + tokenId);
//    }

   

// export async function getbalance() {
// const query = new AccountBalanceQuery()
// .setAccountId(accountId);

// const tokenBalance = await query.execute(client);

// console.log("The token balance(s) for this account: " +tokenBalance.hbars.toString());

// document.getElementById("get").innerHTML = tokenBalance.hbars.toString()

// }



// fetch(
//   "https://api/v1/balances?limit=1&account.id=lt:0.0.2004"
// ).then((response) => response.json()).then(json=> {
//   console.log(json);
//   // document.getElementById('root1').innerHTML= json[4].name;
//   // let data = ""
//   // json.map((values)=> {
//   // data =`<div class="root"> 
//   // <p class ="decimals"${values.decimals}</p>
//   // <h1 class ="title">${values.name}</h1>
//   // <img src=${values.icon} alt="img class="images">
//   // <p class ="symbol"${values.symbol}</p>
//   // <p class ="category">Price in USD: ${values.priceUsd}</p>
//   // <p class= "id"> ID: ${values.id}</p>
//   // <p class ="price"> price: ${values.price}</p>
//   // </div>`
//   // })
  
// document.getElementById("root").innerHTML=data
// }).catch((err) => {
//   console.log(err)
// })
  export default App;
    


