import { useState, useEffect } from "react"
export default function App() {
    const [loading, setLoading] = useState(false)
    const [apodData, setApodData] = useState(null)
    const [modalOpen, setModalOpen] = useState(false)

    useEffect(() => {
        setLoading(true)
        const url = "https://api.nasa.gov/planetary/apod?api_key="
        const NASA_API_KEY = "Nc4u3rKeDSGDu6oTRcpkb9JwjUAGLGddaSc3LdXs"
        fetch(url + NASA_API_KEY)
            .then(res => res.json())
            .then(data => {
                setApodData(data)
                setLoading(false)
            })
    }, [])
    
    return (
        <div style={{ width: "400px", height: "250px", position: "relative" }}>
            {apodData ? ( 
                <>
                    <img style={{ width: "100%", height: "100%", objectFit: "cover" }} src={apodData.hdurl} />
                    <div style={{ position: "absolute", bottom: 8, left: 10, color: "white", display: "flex", flexDirection: "column", gap: "2px" }}>
                        <p style={{ margin: 0, fontSize: "13px", overflowWrap: "break-word" }}>NASA | Astronomy Picture of the Day | {apodData.date}</p>
                        <h1 style={{ margin: 0, fontSize: "19px", overflowWrap: "break-word" }}>{apodData.title}</h1>
                    </div>
                    {modalOpen ? (
                        <div style={{ position: "absolute", top: 0, right: 0, width: "35%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.7)", color: "white", display: "flex" }}>
                            <div style={{ padding: "12px", paddingBottom: "30px", paddingRight: "12px", maxHeight: "100%", overflowY: "auto", scrollbarWidth: "thin", display: "flex", flexDirection: "column", gap: "5px" }}>
                                <h3 style={{ fontSize: "15px", margin: 0, overflowWrap: "break-word" }}>{apodData.title}</h3>
                                <p style={{ fontSize: "12px", margin: 0, overflowWrap: "break-word" }}>
                                    {apodData.explanation}
                                </p>
                            </div>
                            <button onClick={() => setModalOpen(false)} style={{ position: "absolute", bottom: 5, left: 5, fontSize: "20px", cursor: "pointer", color: "white", backgroundColor: "transparent", border: "none" }}>
                                →
                            </button>
                        </div>
                    ) : (
                        <button
                            onClick={() => setModalOpen(true)}
                            onMouseEnter={e => e.currentTarget.style.opacity = 0.8}
                            onMouseLeave={e => e.currentTarget.style.opacity = 1}
                            title="Info"
                            style={{ position: "absolute", bottom: 10, right: 10, border: "none", width: "23px", height: "23px", cursor: "pointer", padding: "2px" , backgroundColor: "white", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "15px", fontWeight: "bold" }}
                        >
                            i
                        </button>
                    )}
                </>
            ) : (
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: "black",  display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <h3 style={{ color: "white", margin: 0, fontWeight: "500" }}>Loading...</h3>
                </div>
            )}
        </div>
    )
}
