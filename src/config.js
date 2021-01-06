const CONFIGS = {
  region: 'ap-guangzhou',
  zone: 'ap-guangzhou-3',
  netInterface: 'VPC',
  storageType: 'SD',
  pGroupId: 'pgroupbasic',
  protocol: 'NFS',
  protocolMap: {
    NFS: 'NFS',
    SMB: 'CIFS'
  }
}

module.exports = CONFIGS
