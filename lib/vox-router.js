import Node from './Node'

function parseRoutes(edge, original, parent) {
  let node = new Node({
    original: original,
    parent: parent,
    name: edge
  })

  if(original.children) {
    for(let i in original.children) {
      let child = parseRoutes(i, original.children[i], node)
      node.addChild(child)
    }
  }
  return node
}

class VoxRouter {
  constructor(settings) {
    this.root = parseRoutes('', settings.routes, null)
  }
}

export default VoxRouter