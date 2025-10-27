class Software {
    constructor(name) {
        this.name = name;
    }

    run() {
        console.log(`${this.name} is running`);
    }
}

class Plugin {
    constructor(name) {
        this.name = name;
    }

    activate() {
        console.log(`Plugin "${this.name}" is activated`)
    }
}

class Browser extends Software {
    constructor(name) {
        super(name)
        this.plugins = []
    }

    install(plugin) {
        this.plugins.push(plugin)
        console.log(`Plugin "${plugin.name}" installed in ${this.name}`)
    }

    run() {
        super.run()
        console.log(`${this.name} is loading installed plugins...`)
        this.plugins.forEach(plugin =>plugin.activate())
    }
}

const chrome = new Browser('Chrome')
const adblock = new Plugin('AdBlock')
const darkmode = new Plugin('Dark Mode')

chrome.install(adblock)
chrome.install(darkmode)

chrome.run()