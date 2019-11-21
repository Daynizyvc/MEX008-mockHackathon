let Error404 = {
    render : async () => {
        let view = `
            <div class="_page error404">
                <h1>Soy el error</h1>            
            </div>
        `
        return view;
    },
    after_render: async () => {

    }
}
export default Error404;