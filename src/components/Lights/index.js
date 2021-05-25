import React,{useState} from 'react'

const Lights = () => {

    const [chambre1,setchambre1]=useState('off')
    function validate(event){
        if (event.target.value==='off'){
            setchambre1('on')
        }
        else{
            setchambre1('off')
        }
    }
      
//     }    
    // function validate(e){
    //     if( e.target.getAttribute("value")==='off'){
    //         e.target.setAttribute("value",'on')
    //     }
    //     else{
    //         e.target.setAttribute("value",'off')
    //     }
    // }
    return (
        <div className='lights'>
            <h3 style={{ textAlign: 'center' }}>Controle Lumière</h3>
            <table>
                <tr>
                    <td>
                        <h5>Contoler chambre 1</h5>
                    </td>
                    <td>
                        <label className="switch ">
                            <input type="checkbox" name="chambre1" className="default" value="off" onClick="validate()" />
                            <span className="slider round" />
                        </label>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h5>Contoler chambre 2</h5>
                    </td>
                    <td>
                        <label className="switch ">
                            <input type="checkbox" name="chambre2" className="warning" onClick="validate()" />
                            <span className="slider round" />
                        </label>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h5>Contoler chambre 3</h5>
                    </td>
                    <td>
                        <label className="switch ">
                            <input type="checkbox" name="chambre3" className="info" onClick="validate()" />
                            <span className="slider round" />
                        </label>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h5>Contoler chambre 4</h5>
                    </td>
                    <td>
                        <label className="switch ">
                            <input type="checkbox" name="chambre4" className="success" onClick="validate()" />
                            <span className="slider round" />
                        </label>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h5>Contoler chambre 5</h5>
                    </td>
                    <td>
                        <label className="switch ">
                            <input type="checkbox" name="chambre5" className="danger"  onClick="validate()"/>
                            <span className="slider round" />
                        </label>
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default Lights
