

const Slider = () => {
    return (
        <div className={'w-full h-screen'}>
            <div className={'relative before:w-full before:h-96 before:absolute before:content[""] before:bg-black/30 before:left-0 before:z-50'}>
                <div className={'absolute left-0 w-full '}>
                    <img src={'https://i.pinimg.com/736x/20/76/fe/2076fec047a76cf943d4bd86504c176d.jpg'}
                         className={'w-full h-96 object-cover'}/>
                </div>
                <div className={'absolute left-0 w-full '}>
                    <img src={'https://i.pinimg.com/474x/93/50/47/935047ad6a0230debf4f982753e946c4.jpg'}
                         className={'w-full h-96 object-cover'}/>
                </div>
                <div className={'absolute left-0 w-full '}>
                    <img src={'https://i.pinimg.com/474x/02/58/4c/02584c10eef16db0103b685108f28d77.jpg'}
                         className={'w-full h-96 object-cover'}/>
                </div>
                
                <div className={'absolute -top-full z-50'}>
                    <button className={'py-0.5 px-3 border rounded text-sm'}>prev</button>
                </div>
            </div>
        </div>
    )
}

export default Slider;

