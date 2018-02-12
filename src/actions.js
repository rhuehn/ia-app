export const
    SET_DATA = 'SET_DATA',
    setData = data => ({type: SET_DATA, data}),
    SET_ERR = 'SET_ERR',
    setErr = err => ({type: SET_ERR, err}),
    fetchData = () => async (dispatch, getState) => {
//         const {username, latmin, latmax, lonmin, lonmax} = getState()
//         const response = await fetch(
//             `\
// http://data.aishub.net/ws.php?username=${username}\
// &format=1&output=json&compress=0\
// &latmin=${latmin}\
// &latmax=${latmax}\
// &lonmin=${lonmin}\
// &lonmax=${lonmax}\
// `,
//             {'mode': 'no-cors'}
//         )
//         if (response.ok)
//             dispatch(setData(await response.json()))
//         else
//             dispatch(setErr(response.statusText))
        dispatch(setData(testData))
    },
    SET_SHIP = 'SET_SHIP',
    setShip = (ship, marker) => ({type: SET_SHIP, ship, marker}),
    shipMarker = ({MMSI, NAME, LONGITUDE, LATITUDE}) => ({
        key: MMSI,
        title: NAME,
        position: [Number(LONGITUDE), Number(LATITUDE)]
    }),
    searchShip = name => async (dispatch, getState) => {
        const {data} = getState()
        if (data) {
            const ship = data.find(s => s.NAME.toUpperCase() === name.toUpperCase())
            if (ship) dispatch(setShip(ship, shipMarker(ship)))
        }
    }

const testData = [
    {
        MMSI: '264162572',
        TIME: '2011-04-12 10:50:11 GMT',
        LONGITUDE: '6.1067933333333',
        LATITUDE: '51.995568333333',
        COG: '237.4',
        SOG: '6.6',
        HEADING: '511',
        NAVSTAT: '5',
        IMO: '0',
        NAME: 'A',
        CALLSIGN: 'YP2572',
        TYPE: '70',
        A: '68',
        B: '12',
        C: '6',
        D: '2',
        DRAUGHT: '2.4',
        DEST: 'ROTTERDAM',
        ETA: '03-15 10:00'
    },
    {
        MMSI: '244670509',
        TIME: '2011-04-12 10:44:54 GMT',
        LONGITUDE: '4.5763166666667',
        LATITUDE: '51.21455',
        COG: '117',
        SOG: '5.6',
        HEADING: '511',
        NAVSTAT: '15',
        IMO: '0',
        NAME: 'B',
        CALLSIGN: 'PD2667',
        TYPE: '79',
        A: '74',
        B: '11',
        C: '0',
        D: '10',
        DRAUGHT: '1.4',
        DEST: '',
        ETA: '01-16 13:10'
    }
]