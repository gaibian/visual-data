export function openInfoWin(map, options) {
    function createInfoWindow(item) {
        let info = document.createElement("div");
        info.className = "custom-info input-card content-window-card";
        //向右三角形
        let triangleDiv = document.createElement("div")
        triangleDiv.className = "triangle_border_left"
        triangleDiv.innerHTML = '<span></span>'
        info.appendChild(triangleDiv)
        let titleDiv = document.createElement("div")
        titleDiv.className = 'title'
        titleDiv.innerText = item.title
        let contentDiv = document.createElement("div")
        
        item.content.forEach(value => {
            let p = document.createElement("p")
            p.innerHTML = `<i></i>${value}<span>异常</span>`
            contentDiv.appendChild(p)
        })
        info.appendChild(titleDiv)
        info.appendChild(contentDiv)
        return info;
    }

    function Delete(dom) {

    }
    let count = 0;
    let markerArr = [];
    options.forEach(item => { //对提示框进行了一次全部绘制
        let marker = new AMap.Marker({
            position: item.locat,
            content:createInfoWindow(item),
            anchor:'middle-left',
            offset: new AMap.Pixel(30,0)
        })
        markerArr.push(marker)
    })
    setInterval(() => { //10秒进行一次切换
        markerArr.forEach(item => {
            map.remove(item)
        })
        map.add(markerArr[count])
        count ++;
        if(count == markerArr.length){
            count = 0
        }
    },2000)
}

export function closeInfoWin() {
    if (infoWin) {
        infoWin.close();
    }
}