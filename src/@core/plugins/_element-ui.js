import ElementPlus from 'element-plus'

async function importCss() {
  await import('element-plus/dist/index.css')
}

export function addElement(app) {

  importCss().then(() => {
    app.use(ElementPlus)
  })

}