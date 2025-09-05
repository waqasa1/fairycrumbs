import { Box, Container, Typography, Button, Card, CardContent, CardMedia, Grid } from "@mui/material"
import { useRef } from "react"

// Import images
import biscuits from "../assets/biscuits.jpeg"
import cookiebasket1 from "../assets/cookiebasket1.jpeg"
import fettuccinecrepes from "../assets/fettuccinecrepes.jpg"
import pancakes from "../assets/pancakes1.jpeg"
import logo from "../assets/fairy1.png"
import heroBanner from "../assets/hero-banner.png" // <- AI generated image you add here
import wafflepancakes from "../assets/wafflepancakes.jpeg"
import milkshakes from "../assets/milkshakes.jpg"
import icecreamandpancakes from "../assets/icecreamandpancakes.jpeg"
import oreomilkshake from "../assets/oreomilkshake.jpeg"
import kunafacrepe from "../assets/kunafacrepe.jpeg";
import pistachiowaffle from "../assets/pistachiowaffle.jpeg";
import sushirolledcrepes from "../assets/sushirolledcrepes.jpeg";



function HomePage() {

  const menuItems = [
  {
    name: "Buttery Biscuits",
    image: biscuits,
    description: "Freshly baked buttery biscuits with a golden crisp outside and soft inside.",
  },
  {
    name: "Cookie Basket",
    image: cookiebasket1,
    description: "An assorted basket of our finest cookies, baked with love and premium ingredients.",
  },
  {
    name: "Fettuccine Crepes",
    image: fettuccinecrepes,
    description: "Thin and soft crepes, folded with sweet fillings and a drizzle of chocolate.",
  },
  {
    name: "Fluffy Pancakes",
    image: pancakes,
    description: "Stacked pancakes served warm with syrup and a sprinkle of sugar magic.",
  },
  {
    name: "Waffles",
    image: wafflepancakes,
    description: "Crispy-on-the-outside, fluffy-on-the-inside waffles served pancake-style with syrups.",
  },
  {
    name: "Refreshing Milkshakes",
    image: milkshakes,
    description: "Thick, creamy shakes blended with rich flavors and topped with whipped cream.",
  },
  {
    name: "Ice Cream & Fettuccine Crepe",
    image: icecreamandpancakes,
    description: "Warm pancakes paired with scoops of ice cream for a perfect hot-and-cold delight.",
  },
  {
    name: "Oreo Milkshake",
    image: oreomilkshake,
    description: "A classic favorite — crushed Oreos blended into a creamy, dreamy milkshake.",
  },
  {
    name: "Kunafa Crepe",
    image: kunafacrepe,
    description: "A Middle Eastern twist — crispy kunafa wrapped in soft crepes with sweet syrup.",
  },
  {
    name: "Pistachio Waffle",
    image: pistachiowaffle,
    description: "Golden waffles topped with rich pistachio cream and crunchy pistachio bits.",
  },
  {
    name: "Sushi Rolled Crepes",
    image: sushirolledcrepes,
    description: "Fun sushi-style rolled crepes filled with cream, fruits, and drizzles of chocolate.",
  },
]


  const menuRef = useRef(null) // ✅ create a ref

  const handleScrollToMenu = () => {
    menuRef.current?.scrollIntoView({ behavior: "smooth" }) // ✅ smooth scroll
  }

  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          minHeight: "100vh",
          position: "relative",
          display: "flex",
          alignItems: "center",
          py: 8,
          overflow: "hidden",
          backgroundImage: `url(${heroBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            background: "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55))", // ✅ overlay
            zIndex: 1,
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
          <Grid container spacing={6} alignItems="center">
            {/* Left: Logo */}
            <Grid item xs={12} md={5}>
              <Box
                component="img"
                src={logo}
                alt="FairyCrumbs Logo"
                sx={{
                  width: "90%",
                  maxWidth: "360px",
                  display: "block",
                  mx: "auto",
                }}
              />
            </Grid>

            {/* Right: Text */}
            <Grid item xs={12} md={7}>
              <Typography
                component="h1"
                sx={{
                  fontSize: "3.5rem",
                  fontWeight: 700,
                  color: "#fff", // ✅ white text
                  mb: 2,
                }}
              >
                FairyCrumbs
              </Typography>
              <Typography
                component="h2"
                sx={{
                  fontSize: "2rem",
                  color: "#FFB6C1", // ✅ soft pink
                  mb: 3,
                  fontStyle: "italic",
                }}
              >
                Where Dessert Meets Magic
              </Typography>
              <Typography
                sx={{
                  fontSize: "1.2rem",
                  color: "#f1f1f1",
                  maxWidth: "480px",
                  lineHeight: 1.6,
                  mb: 4,
                }}
              >
                Indulge in premium desserts crafted with love, blending pink sweetness, chocolate richness,
                and a touch of fairy dust.
              </Typography>
              <Button
                onClick={handleScrollToMenu}
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: "#D2691E",
                  color: "#fff",
                  px: 4,
                  py: 2,
                  borderRadius: "25px",
                  fontSize: "1.1rem",
                  boxShadow: "0 4px 15px rgba(210,105,30,0.3)",
                  "&:hover": { backgroundColor: "#a0522d" },
                }}
              >
                Explore Menu
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>


      {/* Menu Section */}
      {/* Menu Section */}
      <Box ref={menuRef} sx={{ py: 8, backgroundColor: "#fff" }}>
        <Container maxWidth="lg">
          <Typography
            component="h2"
            align="center"
            sx={{ fontSize: "2.5rem", fontWeight: 600, color: "#D2691E", mb: 2, mt: 10 }}
          >
            Our Signature Creations
          </Typography>
          <Typography
            component="p"
            align="center"
            sx={{ fontSize: "1.2rem", color: "#A0522D", mb: 6, fontStyle: "italic" }}
          >
            Handcrafted with love and a touch of magic
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            {menuItems.map((item, index) => (
              <Grid item xs={12} md={6} key={index} sx={{ display: "flex", justifyContent: "center" }}>
                <Card
                  sx={{
                    maxWidth: 500,   // ✅ limit card width but still responsive
                    borderRadius: "15px",
                    boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",   // ✅ ensures it scales down nicely on mobile
                  }}
                >
                  <CardMedia
                    component="img"
                    image={item.image}
                    alt={item.name}
                    sx={{
                      height: 250,
                      width: "100%",
                      objectFit: "cover",
                      borderTopLeftRadius: "15px",
                      borderTopRightRadius: "15px",
                    }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography
                      component="h3"
                      sx={{ fontSize: "1.2rem", fontWeight: 600, color: "#D2691E", mb: 1 }}
                    >
                      {item.name}
                    </Typography>
                    <Typography sx={{ fontSize: "0.95rem", color: "#A0522D" }}>
                      {item.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>


    </>
  )
}

export default HomePage
