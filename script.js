class Conversion {
    binaryToDec(bin) {
        var decim = parseInt(bin,2)
        return decim
    }

    decimalToBin(dec){
      var bin = (dec>>>0).toString(2)
      return bin
    }
}

function toDec(){
    var bina = document.getElementById('binaire').value
    var deci = document.getElementById('decimal')

    const conv = new Conversion()
    deci.value = conv.binaryToDec(bina)
}

function toBin(){
    var bina1 = document.getElementById('binaire1')
    var deci1 = document.getElementById('decimal1').value

    const convers = new Conversion()
    bina1.value = convers.decimalToBin(deci1)
}
