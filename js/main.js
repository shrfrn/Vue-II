const { createApp } = Vue

const options = {
    template: `
        <section>
            <h1>Vue ❤️</h1>
        </section>
    `,
}

const app = createApp(options)
app.mount('#app')