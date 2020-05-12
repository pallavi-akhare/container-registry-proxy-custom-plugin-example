import { Request, Plugin } from 'container-registry-proxy/dist/plugins'

const customPlugin: Plugin =  {
  name: "Custom Plugin",
  description: "Drops all requests which are to repositories which do not start with 'addono'",
  requestPipe: async (req: Request) => {
    if (req.parameters && !req.parameters.repository.startsWith("addono")) {
      console.log(`Dropping request: Because repository "${req.parameters.repository}" doesn't start with "addono"`)
      return req
    } else {
      return undefined
    }
  }
}

export default customPlugin