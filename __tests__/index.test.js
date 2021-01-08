const { generateId, getServerlessSdk } = require('./lib/utils')

const instanceYaml = {
  org: 'orgDemo',
  app: 'appDemo',
  stage: 'dev',
  component: 'cfs@dev',
  name: `cfs-integration-tests-${generateId()}`,
  inputs: {
    name: 'cfs-test',
    region: "ap-guangzhou",
    zone: "ap-guangzhou-3",
    vpc: {
      vpcId: "vpc-p2dlmlbj",
      subnetId: "subnet-qaf708t2"
    },
    tags:[
      {
        key: 'slstest',
        values: 'slstest'
      }
    ]
  }
}

const credentials = {
  tencent: {
    SecretId: process.env.TENCENT_SECRET_ID,
    SecretKey: process.env.TENCENT_SECRET_KEY,
  }
}

// get serverless construct sdk
const sdk = getServerlessSdk(instanceYaml.org)

it('Using template should deploy success', async () => {
  const instance = await sdk.deploy(instanceYaml, credentials)

  expect(instance).toBeDefined()
  expect(instance.instanceName).toEqual(instanceYaml.name)

  delete instance.outputs.vendorMessage
  expect(instance.outputs).toEqual({
    name: instanceYaml.inputs.name,
    cfsId: expect.stringContaining('cfs-'),
    region: instanceYaml.inputs.region,
    storageType: 'SD',
    pGroupId: 'pgroupbasic',
    protocol: 'NFS',
    netInterface: 'VPC',
    vpc: instanceYaml.inputs.vpc,
    tags: instanceYaml.inputs.tags
  })
})

it('should remove success', async () => {
  await sdk.remove(instanceYaml, credentials)
  result = await sdk.getInstance(instanceYaml.org, instanceYaml.stage, instanceYaml.app, instanceYaml.name)

  expect(result.instance.instanceStatus).toEqual('inactive')
})
