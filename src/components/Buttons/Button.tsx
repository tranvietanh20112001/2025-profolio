
import C from "@components/Colors/Colors"



const SmallButon = {
    height: "48px", 
    maxWidth: "156px", 
    bgcolor: C.Primary.Black, 
    color: C.Primary.White,
    fontSize: "16px",
    borderRadius: "4px",
}

const SquareButton = {
    height: "64px",
    width: "64px",
    borderRadius: "4px",
    bgcolor: C.Primary.White,
    color: C.Primary.Black,
    padding: 0,
    borderColor: C.Primary.Black,

    "&:hover": {
        bgcolor: C.Primary.Black,
        color: C.Primary.White,
        '& svg': {
            transform: 'scale(1.2)',
            transition: 'transform 0.3s ease-in-out'
                                    }
    }
}

export default { SmallButon, SquareButton }