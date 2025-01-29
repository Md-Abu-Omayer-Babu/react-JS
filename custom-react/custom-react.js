function customRender(reactElement, mainContainer){
    // const domElement = document.createElement(reactElement.type);
    // console.log(domElement);
    // domElement.innerHTML = reactElement.children;
    // // console.log(domElement.innerHTML);
    
    // domElement.setAttribute('href', reactElement.props.href);
    // domElement.setAttribute('target', reactElement.props.target);
    
    // mainContainer.appendChild(domElement);
    // console.log(mainContainer);

    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;

    for(const i in props){
        if(i == children) continue;
        domElement.setAttribute(i, reactElement.props[i]);
    }
    mainContainer.appendChild(domElement);
}

const reactElement = {
    type : 'a',
    props: {
        href: "http://www.google.com",
        target: '_blank'
    },
    children: 'Visit Google'
}

const mainContainer = document.querySelector("#root");

customRender(reactElement, mainContainer)

