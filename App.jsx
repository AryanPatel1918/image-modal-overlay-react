import { useState } from "react"
export default function App() {
    const [modalOpen, setModalOpen] = useState(false)
    
    return (
        <div style={{ width: "400px", height: "250px", position: "relative" }}>
            <img style={{ width: "100%", height: "100%", objectFit: "cover" }} src="https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D" />
            <div style={{ position: "absolute", bottom: 0, color: "white", padding: "10px", display: "flex", flexDirection: "column", gap: "5px" }}>
                <h1 style={{ margin: 0, fontSize: "19px" }}>The River of Mount Olympus</h1>
                <p style={{ margin: 0, fontSize: "13px" }}>NASA | Astronomy Picture of the Day | 2025-11-25</p>
            </div>
            {modalOpen ? (
                <div style={{ position: "absolute", top: 0, right: 0, width: "35%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.7)", color: "white", display: "flex" }}>
                    <div style={{ padding: "12px", paddingBottom: "30px", paddingRight: "12px", maxHeight: "100%", overflowY: "auto", scrollbarWidth: "thin", display: "flex", flexDirection: "column", gap: "5px" }}>
                        <h3 style={{ fontSize: "15px", fontWeight: "500", margin: 0, overflowWrap: "break-word" }}>The River of Mount Olympus</h3>
                        <p style={{ fontSize: "12px", fontWeight: "500", margin: 0, overflowWrap: "break-word" }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae luctus dui. Vivamus viverra, enim at malesuada elella. Duis a gravida augue. Nunc placerat eonec ut eleifend turpis.
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
                    onMouseLeave={e => e.currenTarget.style.opacity = 1}
                    title="Info"
                    style={{ position: "absolute", bottom: 10, right: 10, border: "none", width: "25px", height: "25px", cursor: "pointer", padding: "2px" , backgroundColor: "white", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "15px", fontWeight: "bold" }}
                >
                    i
                </button>
            )}
        </div>
    )
}
