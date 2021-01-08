const CONFIGS = require('./config')

const deepClone = (obj) => {
  return JSON.parse(JSON.stringify(obj))
}

const getType = (obj) => {
  return Object.prototype.toString.call(obj).slice(8, -1)
}

const capitalString = (str) => {
  if (str.length < 2) {
    return str.toUpperCase()
  }

  return `${str[0].toUpperCase()}${str.slice(1)}`
}

const initializeInputs = async (instance, inputs = {}) => {
  const { state } = instance
  const region = inputs.region || CONFIGS.region

  const clsInputs = Object.assign(inputs, {
    region,
    zone: inputs.zone || CONFIGS.zone,
    fileSystemId: inputs.cfsId || state.cfsId,
    fsName: inputs.name,
    protocol: CONFIGS.protocolMap[inputs.protocol] || CONFIGS.protocol,
    netInterface: inputs.netInterface || CONFIGS.netInterface,
    storageType: inputs.storageType || CONFIGS.storageType,
    pGroupId: inputs.pGroupId || CONFIGS.pGroupId
  })

  return {
    region,
    clsInputs
  }
}

module.exports = {
  getType,
  capitalString,
  deepClone,
  initializeInputs
}
