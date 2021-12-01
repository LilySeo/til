import React from 'react';
import MapContent from "./components/MapContent";

import ColorBox from "./components/ColorBox";
// import ColorContext from "./contexts/color";
import { ColorProvider } from "./contexts/color";
import SelectColors from "./components/SelectColors";

const App = () => {
    return (
        <div>hoho
            <MapContent />
            {/*<MapCon />*/}
            {/*<div  style={{*/}
            {/*    width: '500px',*/}
            {/*    height: '500px',*/}
            {/*    border: '1px solid red'*/}
            {/*}}>*/}

            {/*</div>*/}
        </div>


        // <ColorProvider>
        //     <div>
        //         {/*<SelectColors />*/}
        //       {/*<ColorBox />*/}
        //     </div>
        // </ColorProvider>
    );
};

export default App;