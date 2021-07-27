console.log("Iniciando");

window.addEventListener('load', function () {
  console.log("Loading")
});

const connect = () => {
  if (typeof web3 !== 'undefined') {
    window.web3 = new Web3(window.web3.currentProvider)

    if (window.web3.currentProvider.isMetaMask === true) {
      window.web3.eth.getAccounts((error, accounts) => {
        if (accounts.length == 0) {
          // There is no active accounts in MetaMask
          console.log('There is no active accounts in MetaMask')
        }
        else {
          console.log('Hola')
          console.log(accounts)
          replaceAccount(accounts)
        }
      });
    } else {
      // Another web3 provider
      console.log('Another web3 provider')
  }
  } else {
    // No web 3 provider
    console.log('No web 3 provider')
  }
}

const disconnect = () => {
  console.log("disconnecting");
  replaceAccount("")
}

const replaceAccount = (account) => {
  let divText = document.getElementById('account');
  divText.textContent = account
}
