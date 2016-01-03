class Node {
  constructor(settings) {
    this.component = settings.original.component
    this.type = settings.original.type
    this.name = settings.edge
    this.parent = settings.parent
    this.children = []
  }

  addChild(childNode) {
    this.children.push(childNode)
  }
}

export default Node