let Navbar = {
    render : async () => {
        let view = `
        <div>
            <a href="#/count"> Cuenta</a>
            <a href="#/"> Inicio</a>
            <a href="#/record">Historial</a>
        </div>
        
        `
        return view;
    },
    after_render: async () => {  
    }
}
export default Navbar;