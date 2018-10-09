RIVEN.lib.Dom = function (id, rect, ...params) {
  RIVEN.Node.call(this, id, rect)

  this.type = params[0] ? params[0] : 'yu'
  this.glyph = 'M150,60 L150,60 L60,150 L150,240 L240,150 Z'
  this.label = `${this.id}:${this.type}`
  this.el = document.createElement(this.type)
  this.el.id = this.id
  this.is_installed = false

  if (params[1]) {
    this.el.innerHTML = params[1]
  }

  this.receive = function (content) {
    if (content[this.id]) {
      this.update(content[this.id])
      this.send(content[this.id])
    }
  }

  this.answer = function () {
    if (!this.is_installed) {
      this.install(this.request())
    }
    return this.el
  }

  this.install = function (elements) {
    this.is_installed = true
    for (id in elements) {
      this.el.appendChild(elements[id])
    }
  }

  this.update = function (content) {
    if (typeof content === 'string') {
      this.el.innerHTML = content
    }
  }
}
