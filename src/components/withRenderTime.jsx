const withRenderTime = (Child) => {
    return (props) => {
        const start = performance.now();
        const component = <Child {...props} />
        const stop = performance.now();
        console.log(`Render Time for ${Child.name}: ${stop - start}ms`)
        return component
    }

}

export default withRenderTime
