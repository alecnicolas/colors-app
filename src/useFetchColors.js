export const useFetchColors = () => {
    const getColors = (sat, light, setColorList, setLoading) => {
        setColorList({})
        setLoading(true)

        let hue = 0
        while (hue < 360) {
            const step = hue;
            fetch(`https://www.thecolorapi.com/id?hsl=hsl(${hue},${sat}%,${light}%)`)
                .then(response => response.json())
                .then(data => {
                    const formattedData = {
                        [data.name.value]: {
                            'name': data.name,
                            'hex': data.hex,
                            'rgb': data.rgb
                        }
                    }
                    setColorList(prev => { return {...prev, ...formattedData} })
                })
                .catch(err => console.error(err))
                .finally(() => { if (step === 359) {setLoading(false)} })
            hue++
        }
    }

    return { getColors }

}