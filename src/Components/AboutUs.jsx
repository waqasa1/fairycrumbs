import { Box, Container, Typography, Grid } from "@mui/material"
import dessertsmaking from "../assets/dessertsmaking.jpg"

function AboutUs() {
  return (
    <Box sx={{ py: 8, backgroundColor: "#fff" }}>
      <Container maxWidth="lg">
        {/* Page Title */}
        <Typography
          component="h1"
          align="center"
          sx={{ fontSize: "3rem", fontWeight: 700, color: "#D2691E", mb: 6 }}
        >
          About Us
        </Typography>

        {/* Who We Are */}
        <Typography sx={{ fontSize: "1.2rem", color: "#2c1810", mb: 3 }}>
          <strong>Who We Are:</strong> FairyCrumbs is a local dessert company redefining desserts with
          premium ingredients, trend-inspired recipes, and international flavors. Based in Lahore,
          led by our CEO <strong>Faizan Arif</strong>, we bring both global inspiration and local passion
          to every creation.
        </Typography>

        {/* Vision, Mission, Objectives */}
        <Typography sx={{ fontSize: "1.2rem", color: "#2c1810", mb: 2 }}>
          <strong>Vision:</strong> To become the country’s leading premium dessert brand with innovative
          products and unforgettable dining experiences.
        </Typography>
        <Typography sx={{ fontSize: "1.2rem", color: "#2c1810", mb: 2 }}>
          <strong>Mission:</strong> To delight customers with unique desserts crafted with creativity,
          authenticity, and premium quality.
        </Typography>
        <Typography sx={{ fontSize: "1.2rem", color: "#2c1810", mb: 4 }}>
          <strong>Objectives:</strong>
          <ul>
            <li>Market leadership in 3 years</li>
            <li>Consistent innovation with international dessert trends</li>
            <li>Sustainability through natural ingredients and responsible sourcing</li>
            <li>Expansion to other key locations</li>
          </ul>
        </Typography>

        {/* Why Choose Us */}
        <Typography
          component="h2"
          sx={{ fontSize: "2rem", fontWeight: 600, color: "#D2691E", mb: 3 }}
        >
          Why Choose Us
        </Typography>
        <Typography sx={{ fontSize: "1.2rem", color: "#2c1810", mb: 2 }}>
          <strong>Strengths:</strong> Unique international desserts, premium quality, aesthetic dining
          experience.
        </Typography>
        <Typography sx={{ fontSize: "1.2rem", color: "#2c1810", mb: 2 }}>
          <strong>Opportunities:</strong> Social-media-worthy desserts, young customers looking for
          novelty.
        </Typography>
        <Typography sx={{ fontSize: "1.2rem", color: "#2c1810", mb: 4 }}>
          <strong>Values:</strong> Innovation, authenticity, customer satisfaction, sustainability.
        </Typography>

        {/* Crafted with Passion Section */}
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={dessertsmaking}
              alt="Artisan making desserts"
              sx={{
                width: "100%",
                borderRadius: "20px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              component="h2"
              sx={{ fontSize: "2rem", fontWeight: 600, color: "#D2691E", mb: 3 }}
            >
              Crafted with Passion
            </Typography>
            <Typography sx={{ fontSize: "1.2rem", color: "#2c1810", mb: 2, lineHeight: 1.6 }}>
              Every dessert at FairyCrumbs is a work of art, carefully crafted by our skilled artisans
              using the finest natural ingredients and innovative techniques.
            </Typography>
            <Typography sx={{ fontSize: "1.2rem", color: "#2c1810", lineHeight: 1.6 }}>
              We believe in creating magical moments through exceptional desserts that blend international
              trends with timeless flavors, delivering unique dining experiences that delight all your senses.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default AboutUs
