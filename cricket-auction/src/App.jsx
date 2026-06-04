import { useState } from "react";

export default function App() {
  const players = [
    {
      id: 1,
      name: "Faisal Shaikh (icon)",
      role: "All-Rounder",
      basePrice:10,
      image: "/images/Sabir Naik.jpeg",
    },
    {
      id: 2,
      name: "Dilawar Dhalait (icon) ",
      role: "All-Rounder",
      basePrice: 10,
      image: "/images/.jpeg",
    },
    {
      id: 3,
      name: "Muktar Naik (icon) ",
      role: "All-Rounder",
      basePrice: 10,
      image: "/images/Muktar naik.jpeg",
    },
    {
      id: 4,
      name: "Sabir Naik (icon)",
      role: "All-Rounder",
      basePrice: 10,
      image: "/images/Faisal Shaikh.jpeg",
    },
    {
      id: 5,
      name: "Muzzafar Naik (icon)",
      role: "All-Rounder",
      basePrice: 10,
      image: "/images/Muzzafar naik.jpeg",
    },
    {
      id: 6,
      name: "Nehal Khan (icon)",
      role: "All-Rounder",
      basePrice: 10,
      image: "/images/Nihal khan.jpeg",
    },
    {
      id: 7,
      name: "Shoaib Shaikh (icon)",
      role: "All-Rounder",
      basePrice: 10,
      image: "/images/Shoaib shaikh.jpeg",
    },
    {
      id: 8,
      name: "Tahir Dhalait (icon)",
      role: "All-Rounder",
      basePrice: 10,
      image: "/images/Tahir dhalait.jpeg",
    },
    {
      id: 9,
      name: "Allaudin Dhalait (icon)",
      role: "All-Rounder",
      basePrice: 10,
      image: "/images/bumrah.jpg",
    },
    {
      id: 10,
      name: "Mubarak Dhalait (icon)",
      role: "All-Rounder",
      basePrice: 10,
      image: "/images/bumrah.jpg",
    },
    {
      id: 11,
      name: "Anas Shaikh (icon)",
      role: "All-Rounder",
      basePrice: 10,
      image: "/images/bumrah.jpg",
    },
    {
      id: 12,
      name: "Mohsin Naik (icon)",
      role: "All-Rounder",
      basePrice: 10,
      image: "/images/bumrah.jpg",
    },
    {
      id: 13,
      name: "Faizan BAGA (icon) ",
      role: "All-Rounder",
      basePrice: 10,
      image: "/images/bumrah.jpg",
    },
    {
      id: 14,
      name: "Muzammil Naik",
      role: "All-Rounder",
      basePrice: 10,
      image: "/images/Muzammil naik.jpeg",
    },
    {
      id: 15,
      name: "Saeed Naik",
      role: "Batsman",
      basePrice: 10,
      image: "/images/Saeed naik.jpeg",
    },
    {
      id: 16,
      name: "Murad Shaikh",
      role: "Batsman",
      basePrice: 10,
      image: "/images/bumrah.jpg",
    },
    {
      id: 17,
      name: "Abuzar Naik",
      role: "All-Rounder",
      basePrice: 10,
      image: "/images/Abuzar naik.jpeg",
    },
    {
      id: 18,
      name: "Zeeshan Naik",
      role: "Batsman",
      basePrice: 10,
      image: "/images/bumrah.jpg",
    },
    {
      id: 19,
      name: "Poklyan",
      role: "Batsman",
      basePrice: 10,
      image: "/images/bumrah.jpg",
    },
    {
      id: 20,
      name: "Saad naik",
      role: "All-Rounder",
      basePrice: 10,
      image: "/images/Saad naik.jpeg",
    },
    {
      id: 21,
      name: "Amjad Khan", 
      role: "All-Rounder",
      basePrice: 10,
      image: "/images/Alam naik.jpeg",
    },
    {
      id: 22,
      name: "Ayyan shaikh",
      role: "Bowler",
      basePrice: 10,
      image: "/images/Ayaan shaikh.jpeg",
    },
    {
      id: 23,
      name: "Irfan Naik",
      role: "Batsman",
      basePrice: 10,
      image: "/images/bumrah.jpg",
    },
    {
      id: 24,
      name: "Khalid Mangaokar",
      role: "Batsman",
      basePrice: 10,
      image: "/images/Khalid naik.jpeg",
    },
    {
      id: 25,
      name: "Umair Khan",
      role: "All-rounder",
      basePrice: 10,
      image: "/images/bumrah.jpg",
    },
    {
      id: 26,
      name: "Aman Naik (AJ)",
      role: "Batsman",
      basePrice: 10,
      image: "/images/bumrah.jpg",
    },
    {
      id: 27,
      name: "Fj Raju sir",
      role: "All-Rounder",
      basePrice: 10,
      image: "/images/fj raju.jpeg",
    },
    {
      id: 28,
      name: "Harsvardhan dapde (Birajwadi)",
      role: "Batsman",
      basePrice: 10,
      image: "/images/bumrah.jpg",
    },
    {
      id: 29,
      name: "Saqib (shengaon)",
      role: "Batsman",
      basePrice: 10,
      image: "/images/bumrah.jpg",
    },
    {
      id: 30,
      name: "Sonu Naik",
      role: "Batsman",
      basePrice: 10,
      image: "/images/bumrah.jpg",
    },
    {
      id: 31,
      name: "Firdous naik",
      role: "All-Rounder",
      basePrice: 10,
      image: "/images/bumrah.jpg",
    },
    {
      id: 32,
      name: "Salman Naik",
      role: "All-Rounder",
      basePrice: 10,
      image: "/images/bumrah.jpg",
    },
    {
      id: 33,
      name: "Moin Kazi",
      role: "Batsman",
      basePrice: 10,
      image: "/images/bumrah.jpg",
    },
    {
      id: 34,
      name:"Mubarak Naik (sarpanch)",
      role: "Batsman",
      basePrice: 10,
      image: "/images/bumrah.jpg",
    },
    {
      id: 35,
      name: "Sohel Naik", 
      role: "Batsman",
      basePrice: 10,
      image: "/images/bumrah.jpg",
    },
    {
      id: 36,
      name: "Fayaz naik",
      role: "Batsman",
      basePrice: 170,
      image: "/images/bumrah.jpg",
    },
    {
      id: 37,
      name: "Hafizi",
      role: "All-Rounder",
      basePrice: 170,
      image: "/images/bumrah.jpg",
    },
    {
      id: 38,
      name: "Faiz naik",
      role: "Batsman",
      basePrice: 170,
      image: "/images/Faiz naik.jpeg",
    },
    {
      id: 39,
      name: "Alim Naik",
      role: "All-Rounder",
      basePrice: 170,
      image: "/images/bumrah.jpg",
    },
    {
      id: 40,
      name: "Aman (shittu)",
      role: "Batsman",
      basePrice: 170,
      image: "/images/bumrah.jpg",
    },
    {
      id: 41,
      name: "Hafiji",
      role: "All-Rounder",
      basePrice: 10, 
      image: "/images/bumrah.jpg",
    },
    {
      id: 42,
      name: "Nadim Naik",
      role: "Batsman",
      basePrice: 170,
      image: "/images/bumrah.jpg",
    },
    {
      id: 43,
      name: "Fardeen shaikh",
      role: "Batsman",
      basePrice: 170,
      image: "/images/bumrah.jpg",
    },
    {
      id: 44,
      name: "Mehruj naik",
      role: "Batsman",
      basePrice: 10,
      image: "/images/bumrah.jpg",
    },
    {
      id: 45,
      name: "Navid Mangaokar",
      role: "Batsman",
      basePrice: 10,
      image: "/images/bumrah.jpg",
    },
    {
      id: 46,
      name: "Mohammad yasin shaikh",
      role: "All-Rounder",
      basePrice: 10,
      image: "/images/bumrah.jpg",
    },
    {
      id: 47,
      name: "Danish najir shaikh",
      role: "All-Rounder",
      basePrice: 10,
      image: "/images/bumrah.jpg",
    },
    {
      id: 48,
      name: "Navez Naik",
      role: "Batsman",
      basePrice: 10,
      image: "/images/bumrah.jpg",
    },
    {
      id: 49,
      name: "Aman kazi",
      role: "All-Rounder",
      basePrice: 10,
      image: "/images/bumrah.jpg",
    },
    {
      id: 50,
      name: "Iqbal Mangaokar",
      role: "Batsman",
      basePrice: 10,
      image: "/images/bumrah.jpg",
    },
    {
      id: 51,
      name: "Khalid sadru naik",
      role: "Batsman",
      basePrice: 10,
      image: "/images/bumrah.jpg",
    },
    {
      id: 52,
      name: "Faiz Naik",
      role: "Batsman",
      basePrice: 10,
      image: "/images/bumrah.jpg",
    },
    {
      id: 53,
      name: "Arbaz Mangaokar",
      role: "Batsman",
      basePrice: 10,
      image: "/images/bumrah.jpg",
    },
    {
      id: 54,
      name: "Owais Dhalait",
      role: "Batsman",
      basePrice: 10,
      image: "/images/bumrah.jpg",
    },
    {
      id: 55,
      name: "Tahir Juber shaikh",
      role: "Batsman",
      basePrice: 10,
      image: "/images/bumrah.jpg",
    },
    {
      id: 56,
      name: "Jamil Naik",
      role: "Batsman",
      basePrice: 10,
      image: "/images/bumrah.jpg",
    },
    {
      id: 57,
      name: "Adnan Adam shaikh",
      role: "All-Rounder",
      basePrice: 10,
      image: "/images/bumrah.jpg",
    },
    {
      id: 58,
      name: "Ayub Kazi",
      role: "Batsman",
      basePrice: 10,
      image: "/images/bumrah.jpg",
    },
    {
      id: 59,
      name: "Sohel Naik",
      role: "Batsman",
      basePrice: 10,
      image: "/images/bumrah.jpg",
    },
    {
      id: 60,
      name: "Allaudin Kazi",
      role: "Batsman",
      basePrice: 10,
      image: "/images/bumrah.jpg",
    },
    {
      id: 61,
      name: "Asfaq Naik",
      role: "Batsman",
      basePrice: 10,
      image: "/images/bumrah.jpg",
    },
    {
      id: 62,
      name: "Rizwan Kazi",
      role: "All-Rounder",
      basePrice: 10,
      image: "/images/bumrah.jpg",
    },
    {
      id: 63,
      name: "Ayaz Shaikh",
      role: "Batsman",
      basePrice: 10,
      image: "/images/bumrah.jpg",
    },
    {
      id:64,
      name: "Danish Kazi",
      role: "Batsman",
      basePrice: 10,
      image: "/images/bumrah.jpg",
    },
    {
      id:65,
      name: "Arman Naik",
      role: "Batsman",
      basePrice: 10,
      image: "/images/bumrah.jpg",
    },
    {
      id:66,
      name: "Salman Naik",
      role: "Batsman",
      basePrice: 10,
      image: "/images/bumrah.jpg",
    },
    {
      id:67,
      name: "Jafar Arab",
      role: "Batsman",
      basePrice: 10,
      image: "/images/bumrah.jpg",
    },
    {
      id:68,
      name: "Sajil Shaikh",
      role: "Batsman",
      basePrice: 10,
      image: "/images/bumrah.jpg",
    },
    {
      id:69,
      name: "Riyaz Naik",
      role: "All-Rounder",
      basePrice: 10,
      image: "/images/bumrah.jpg",
    },
    {
      id:70,
      name: "Navid Ajra",
      role: "Batsman",
      basePrice: 10,
      image: "/images/bumrah.jpg",
    },
    {
      id:71,
      name: "Shabir Mangaokar",
      role: "All-Rounder",
      basePrice: 10,
      image: "/images/bumrah.jpg",
    },
    {
      id:72,
      name: "Najir Shaikh",
      role: "Batsman",
      basePrice: 10,
      image: "/images/bumrah.jpg",
    },
    {
      id:73,
      name: "Moin shah",
      role: "All-Rounder",
      basePrice: 10,
      image: "/images/bumrah.jpg",
    },
    {
      id:74,
      name: "Arbaaz Anwar Mangaokar",
      role: "Batsman",
      basePrice: 10,
      image: "/images/bumrah.jpg",
    },
    {
      id:75,
      name: "Abid Naik",
      role: "Batsman",
      basePrice: 10,
      image: "/images/bumrah.jpg",
    },
    {
      id:76,
      name: "Burhan Kazi",
      role: "Batsman",
      basePrice: 10,
      image: "/images/bumrah.jpg",
    },
    {
      id:77,
      name: "Ayaan naik",
      role: "Batsman",
      basePrice: 10,
      image: "/images/bumrah.jpg",
    },
    {
      id:78,
      name: "Rehan Shaikh",
      role: "Batsman",
      basePrice: 10,
      image: "/images/bumrah.jpg",
    },
    {
      id:79,
      name: "Arbaz naik",
      role: "Batsman",
      basePrice: 10,
      image: "/images/bumrah.jpg",
    },
    {
      id:80,
      name: "Salman Kazi",
      role: "Batsman",
      basePrice: 10,
      image: "/images/bumrah.jpg",
    },
    {
      id:81,
      name: "Sultan naik",
      role: "Batsman",
      basePrice: 10,
      image: "/images/bumrah.jpg",
    },
    {
      id:82,
      name: "Jamil khan",
      role: "Bowler",
      basePrice: 10,
      image: "/images/bumrah.jpg",
    },
    {
      id:83,
      name: "Adil naik",
      role: "Batsman",
      basePrice: 10,
      image: "/images/bumrah.jpg",
    },
    {
      id:84,
      name: "Atif naik",
      role: "Batsman",
      basePrice: 10,
      image: "/images/bumrah.jpg",
    },
    {
      id:85,
      name: "Rahil naik",
      role: "Batsman",
      basePrice: 10,
      image: "/images/bumrah.jpg",
    },
    {
      id:86,
      name: "Abdulrehman Kazi",
      role: "Batsman",
      basePrice: 10,
      image: "/images/bumrah.jpg",
    },
    {
      id:87,
      name: "Mahmad shaikh (shankrya)",
      role: "Batsman",
      basePrice: 10,
      image: "/images/bumrah.jpg",
    },
    {
      id:88,
      name: "Raju Dhalait",
      basePrice: 10,
      image: "/images/bumrah.jpg",
    },
    {
      id:89,
      name: "Anas Lamture",
      basePrice: 10,
      image: "/images/bumrah.jpg",
    },

    
  ];


  const [currentIndex, setCurrentIndex] =
    useState(0);

  const currentPlayer =
    players[currentIndex];

  const nextPlayer = () => {
    if (
      currentIndex <
      players.length - 1
    ) {
      setCurrentIndex(
        currentIndex + 1
      );
    }
  };

  const previousPlayer = () => {
    if (currentIndex > 0) {
      setCurrentIndex(
        currentIndex - 1
      );
    }
  };

  const buttonStyle = {
    flex: 1,
    padding: "18px",
    border: "none",
    borderRadius: "14px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "18px",
    transition: "0.3s",
  };

  return (
    <div
      style={{
        background:
          "linear-gradient(to bottom, #0f172a, #111827)",
        minHeight: "100vh",
        color: "white",
        fontFamily: "Arial",
        padding: "40px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        <h1
          style={{
            color: "#facc15",
            fontSize: "52px",
            marginBottom: "10px",
            letterSpacing: "2px",
          }}
        >
          CRICKET AUCTION MANAGEMENT
        </h1>
      </div>

      <div
        style={{
          width: "80%",
          maxWidth: "850px",
          margin: "0 auto",
          background:
            "rgba(255,255,255,0.06)",
          backdropFilter: "blur(10px)",
          border:
            "1px solid rgba(255,255,255,0.1)",
          borderRadius: "28px",
          padding: "60px",
          boxShadow:
            "0 10px 40px rgba(0,0,0,0.5)",
        }}
      >
        <div
          style={{
            textAlign: "center",
          }}
        >
          <h2
            style={{
              color: "#facc15",
              fontSize: "24px",
              letterSpacing: "3px",
              marginBottom: "25px",
            }}
          >
            PLAYER IDENTIFICATION
          </h2>

          <h1
            style={{
              fontSize: "60px",
              marginBottom: "35px",
            }}
          >
            {currentPlayer.name}
          </h1>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "1fr 1fr",
              gap: "25px",
              marginBottom: "40px",
            }}
          >
            <div
              style={{
                background:
                  "rgba(255,255,255,0.08)",
                padding: "30px",
                borderRadius: "20px",
              }}
            >
              <p
                style={{
                  color: "#9ca3af",
                  fontSize: "16px",
                  marginBottom: "12px",
                  letterSpacing: "1px",
                }}
              >
                ROLE
              </p>

              <h3
                style={{
                  fontSize: "34px",
                }}
              >
                {currentPlayer.role}
              </h3>
            </div>

            <div
              style={{
                background:
                  "rgba(255,255,255,0.08)",
                padding: "30px",
                borderRadius: "20px",
              }}
            >
              <p
                style={{
                  color: "#9ca3af",
                  fontSize: "16px",
                  marginBottom: "12px",
                  letterSpacing: "1px",
                }}
              >
                BASE PRICE
              </p>

              <h3
                style={{
                  color: "#4ade80",
                  fontSize: "34px",
                }}
              >
                ₹
                {
                  currentPlayer.basePrice
                }
              </h3>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              gap: "20px",
            }}
          >
            <button
              onClick={
                previousPlayer
              }
              style={{
                ...buttonStyle,
                background:
                  "#374151",
                color: "white",
              }}
            >
              ⬅ BACK
            </button>

            <button
              onClick={nextPlayer}
              style={{
                ...buttonStyle,
                background:
                  "#16a34a",
                color: "white",
              }}
            >
              NEXT ➡
            </button>
          </div>

          <div
            style={{
              marginTop: "35px",
              color: "#9ca3af",
              fontSize: "18px",
            }}
          >
            Player{" "}
            {currentIndex + 1} of{" "}
            {players.length}
          </div>
        </div>
      </div>
    </div>
  );
}