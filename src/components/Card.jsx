import React from 'react';
import {Card, CardContent, CardMedia, Typography, CardActionArea} from '@mui/material';
import '../assets/styles/Card.css';

const CardCoctel = ({coctel, getDetailsCoctel}) => {
	return (
		<div className="content-card">
			<Card sx={{minWidth: 200, maxWidth: 400}} className="card">
				<CardActionArea onClick={() => {
						getDetailsCoctel(coctel.idDrink)
					}}>
					<CardMedia
						component="img"
						height="282"
						image={coctel.strDrinkThumb}
						alt="logo"
						className="img-card"
					/>
					<CardContent className="content-name">
						<Typography gutterBottom variant="h5" component="div">
							<span className="name">{coctel.strDrink}</span>
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
		</div>
	);
};

export default CardCoctel;
