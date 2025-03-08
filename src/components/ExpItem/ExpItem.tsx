const ExpItem = {
    width: "80%",
    height: "600px",
    border: "1px solid black",
    borderRadius: "10px",
    padding: "0 5%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    textAlign: "justify",
    "img": {
        width: "32px",
        height: "32px",
        borderRadius: "50%",
    },
    ".line1": {
        display: "flex",
        gap: "24px",
    },
    "@media (max-width: 768px)": {
        width: "100%",
        height: "auto",
        padding: "24px",
        ".line1": {
            flexDirection: "column",
            gap: "12px",
        },
        "img": {
            width: "16px",
            height: "16px",
        }
    }
}

export default ExpItem;