import { createRoot } from 'react-dom/client';
import React, { useEffect } from 'react';
import Ciallo from './components/Ciallo';
import Jumper from './components/Jumper';
// TODO:晚点改成cdn形式
import meguru from './assets/meguru.aac'

const colorMap = [{
    dur: 12,
    color: 'red',
    size: "35px"
}, {
    dur: 15,
    color: 'aqua',
    size: "40px"
}, {
    dur: 11,
    color: 'coral',
    size: "25px"
}, {
    dur: 7,
    color: 'black',
    size: "19px"
}, {
    dur: 10,
    color: 'greenyellow',
    size: "29px"
}, {
    dur: 12,
    color: 'gold',
    size: '18px'
}, {
    dur: 15,
    color: 'orange',
    size: '50px'
}, {
    dur: 11,
    color: 'pink',
    size: '80px'
}, {
    dur: 12,
    color: 'silver',
    size: "45px"
}, {
    dur: 18,
    color: 'cyan',
    size: "29px"
}, {
    dur: 11,
    color: 'greenyellow',
    size: "23px"
}, {
    dur: 14,
    color: 'grey',
    size: "19px"
}, {
    dur: 6,
    color: 'violet',
    size: "45px"
}, {
    dur: 15,
    color: 'blue',
    size: '26px'
}, {
    dur: 14,
    color: 'green',
    size: '50px'
}, {
    dur: 12,
    color: 'aqua',
    size: '75px'
}, {
    dur: 11,
    color: 'black',
    size: "25px"
}]

const audioList = [meguru]

const App = () => {

    let audioIndex = 0;

    const randomColor = () => {
        const r = Math.floor(Math.random() * 256)
        const g = Math.floor(Math.random() * 256)
        const b = Math.floor(Math.random() * 256)
        return `rgb(${r},${g},${b})`
    }

    const cialloAppend = (event) => {
        const x = event.pageX;
        const y = event.pageY;
        const span = document.createElement('span')
        span.innerHTML = 'Ciallo～(∠・ω< )⌒★';
        span.style.cssText = `position: absolute; left: ${x}px; top: ${y - 20}px; color: ${randomColor()}; bold;`;
        document.body.appendChild(span);
        const animation = span.animate({
            "top": `${y - 180}px`,
            "opacity": 0
        }, {
            duration: 1500,
        });
        new Audio(audioList[audioIndex]).play();
        audioIndex = (audioIndex + 1) % audioList.length;
        animation.onfinish = () => {
            span.remove();
        }
    }

    useEffect(() => {
        document.body.addEventListener('click', cialloAppend)

        return () => {
            document.body.removeEventListener('click', cialloAppend)
        }
    })

    return (
        <>
            <Jumper />
            <div>
                {colorMap.map(item => <Ciallo {...item} />)}
            </div>
        </>
    );
}

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<App />);
