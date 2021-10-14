import QRCode from './asserts/qrcode'
import merge from 'lodash/merge'
import mapValues from 'lodash/mapValues'

const defConfig = {
  encryptionMode: 'WPA',
  hiddenSSID: true,
}

const defQRcodeConfig = {
  width: 150,
	height: 150,
  colorDark : "#000000",
	colorLight : "#ffffff",
	correctLevel : QRCode.CorrectLevel.H,
}

export default function createWifiQRCode(element, options = {}) {
  if (!(element instanceof HTMLElement) && typeof element !== 'string') throw new Error(`第一个参数是 HTMLElement 或者是 String 类型的参数.`)

  const settings = merge(options, defConfig)
  const qrsettings = mapValues(defQRcodeConfig, (v, k) => options[k] ?? v)

  const qrvalue = `WIFI:T:${settings.encryptionMode};S:${settings.ssid};P:${settings.password};H:${settings.hiddenSSID};`
  const targetElement = element instanceof HTMLElement ? element : document.querySelector(element)

  return new QRCode(targetElement, {
    text: qrvalue,
    ...qrsettings,
  })
}
