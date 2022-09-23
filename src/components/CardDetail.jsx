import React from 'react';
import {Card, CardContent, CardMedia, Typography } from '@mui/material';
import '../assets/styles/Card.css';

const CardDetail = ({detail}) => {
	return (
		<div className="content-card-detail">
			<Card className="card-detail">
				<CardContent className="content-name">
					<CardMedia
						component="img"
						height="280"
						width="500"
						image={detail.strDrinkThumb}
						alt="logo"
						className="img-card-detail"
					/>
					<Typography gutterBottom variant="h5" component="div">
						<span className="name">{detail.strDrink}</span>
						<span className="name">{detail.strInstructions}</span>
						<span className="name">{detail.strIngredient1}</span>
						<span className="name">{detail.strMeasure1}</span>
						<span className="name">{detail.dateModified}</span>
					</Typography>
				</CardContent>
			</Card>
		</div>
	);
};

export default CardDetail;
