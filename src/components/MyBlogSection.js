import React from "react";
import {
    Card, CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Container,
    Grid,
    IconButton,
    Typography
} from "@mui/material";
import theme from "../theme";

const myCards = [
    {
        id: 1,
        title: 'PIXEL',
        text: 'Snap at night, type responses in calls and more from Pixel',
        upload_date: '25 Apr, 2022',
        author: 'Ryan Llewellyn',
        image_src: 'https://storage.googleapis.com/gweb-uniblog-publish-prod/images/SPRING_FD_THUMB_169.max-600x600.png',
        card_link: '/about'
    },
    {
        id: 2,
        title: 'DEVICES & SERVICES',
        text: 'So you got new gear for the holidays. Now what?',
        upload_date: '24 Apr, 2022',
        author: 'Ryan Llewellyn',
        image_src: 'https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Google_Pixel_6_Pro_Alt_Angle.max-600x600.jpg',
        card_link: '/abot'
    },
    {
        id: 3,
        title: 'PIXEL',
        text: 'Creator Labs artists take on the Pixel 6',
        upload_date: '23 Apr, 2022',
        author: 'Ryan Llewellyn',
        image_src: 'https://storage.googleapis.com/gweb-uniblog-publish-prod/images/snow_2_final_1.max-600x600.jpg',
        card_link: '/about'
    },
    {
        id: 4,
        title: 'PIXEL',
        text: 'Snap at night, type responses in calls and more from Pixel',
        upload_date: '25 Apr, 2022',
        author: 'Ryan Llewellyn',
        image_src: 'https://storage.googleapis.com/gweb-uniblog-publish-prod/images/SPRING_FD_THUMB_169.max-600x600.png',
        card_link: '/about'
    },
    {
        id: 5,
        title: 'DEVICES & SERVICES',
        text: 'So you got new gear for the holidays. Now what?',
        upload_date: '24 Apr, 2022',
        author: 'Ryan Llewellyn',
        image_src: 'https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Google_Pixel_6_Pro_Alt_Angle.max-600x600.jpg',
        card_link: '/abot'
    },
    {
        id: 6,
        title: 'PIXEL',
        text: 'Creator Labs artists take on the Pixel 6',
        upload_date: '23 Apr, 2022',
        author: 'Ryan Llewellyn',
        image_src: 'https://storage.googleapis.com/gweb-uniblog-publish-prod/images/snow_2_final_1.max-600x600.jpg',
        card_link: '/about'
    },
    {
        id: 7,
        title: 'PIXEL',
        text: 'Snap at night, type responses in calls and more from Pixel',
        upload_date: '25 Apr, 2022',
        author: 'Ryan Llewellyn',
        image_src: 'https://storage.googleapis.com/gweb-uniblog-publish-prod/images/SPRING_FD_THUMB_169.max-600x600.png',
        card_link: '/about'
    },
    {
        id: 8,
        title: 'DEVICES & SERVICES',
        text: 'So you got new gear for the holidays. Now what?',
        upload_date: '24 Apr, 2022',
        author: 'Ryan Llewellyn',
        image_src: 'https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Google_Pixel_6_Pro_Alt_Angle.max-600x600.jpg',
        card_link: '/abot'
    },
    {
        id: 9,
        title: 'PIXEL',
        text: 'Creator Labs artists take on the Pixel 6',
        upload_date: '23 Apr, 2022',
        author: 'Ryan Llewellyn',
        image_src: 'https://storage.googleapis.com/gweb-uniblog-publish-prod/images/snow_2_final_1.max-600x600.jpg',
        card_link: '/about'
    },
]

const MyBlogSection = () => {

    return (
        <Container sx={{ marginTop: '8rem', marginBottom: '4rem'}} maxWidth="lg">

            <Typography
                component="h4"
                variant="h4"
                align="center"
                color="#000"
                fontWeight={"normal"}
                gutterBottom
                sx={{ marginBottom: '1rem'}}
            >
                Ryan's Blog
            </Typography>
            <Typography
                component="h5"
                variant="h5"
                align="center"
                color="#000"
                fontWeight={"normal"}
                gutterBottom
                sx={{ marginBottom: '4rem'}}
            >
                A collection of thoughts and ramblings on a variety of topics that interest me.
            </Typography>

            {/* End hero unit */}
            <Grid container spacing={2}>
                {myCards.map((card) => (
                    <Grid item key={card.id} xs={12} sm={6} md={4}>
                        <Card
                            elevation={0}
                            variant={'outlined'}
                            sx={{
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                borderRadius: '2%'
                            }}
                        >
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    /*sx={{
                                        // 16:9
                                        pt: '56.25%',
                                    }}*/
                                    image={card.image_src}
                                    alt="random"
                                />
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography sx={{ color: '#073042'}} gutterBottom variant="subtitle2" fontWeight={'normal'} >
                                        {card.title}
                                    </Typography>
                                    <Typography sx={{ color: '#073042'}} variant="h5" fontSize={22} >
                                        {card.text}
                                    </Typography>
                                </CardContent>
                                <CardActions sx={{ marginBottom: '1rem'}}>
                                    <Typography sx={{
                                        color: '#073042',
                                        marginLeft: '0.75rem',
                                        flex: 1
                                    }} gutterBottom variant="subtitle1" fontWeight={'normal'} >
                                        By {card.author} - {card.upload_date}
                                    </Typography>
                                    <IconButton aria-label="card-link" sx={{
                                        color: '#073042',
                                        "&:hover": {
                                            color: theme.palette.secondary.main,
                                            backgroundColor: 'transparent',
                                        },
                                    }}>
                                        <i className="fa-solid fa-arrow-right-long fa-xl"></i>
                                    </IconButton>
                                </CardActions>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default MyBlogSection;
