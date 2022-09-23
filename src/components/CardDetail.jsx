import React from 'react';
import {Typography, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import '../assets/styles/Card.css';

const CardDetail = ({detail, setBack, back, setShowDetails, setShowCoctels}) => {
	return (
		<div className="content-card-detail">
			<div className="img-content">
				<img
					src={detail.strDrinkThumb}
					alt="logo"
					className="img-card-detail"
				/>
			</div>
			<Typography gutterBottom variant="h4" component="div">
				<div className="title-detail">
					<span className="name-detail">{detail.strDrink}</span>
				</div>
			</Typography>
			<Typography gutterBottom variant="h5" component="div">
				<Typography gutterBottom variant="h4" component="div">
					Ingredients
				</Typography>
				<ul>
					{detail.strIngredient1 == null ? <></> :
						<li className="name-detail">{detail.strIngredient1}<br /></li>
					}
					{detail.strIngredient2 == null ? <></> :
						<li className="name-detail">{detail.strIngredient2}<br /></li>
					}
					{detail.strIngredient3 == null ? <></> :
						<li className="name-detail">{detail.strIngredient3}<br /></li>
					}
					{detail.strIngredient4 == null ? <></> :
						<li className="name-detail">{detail.strIngredient4}<br /></li>
					}
					{detail.strIngredient5 == null ? <></> :
						<li className="name-detail">{detail.strIngredient5}<br /></li>
					}
					{detail.strIngredient6 == null ? <></> :
						<li className="name-detail">{detail.strIngredient6}<br /></li>
					}
					{detail.strIngredient7 == null ? <></> :
						<li className="name-detail">{detail.strIngredient7}<br /></li>
					}
					{detail.strIngredient8 == null ? <></> :
						<li className="name-detail">{detail.strIngredient8}<br /></li>
					}
					{detail.strIngredient9 == null ? <></> :
						<li className="name-detail">{detail.strIngredient9}<br /></li>
					}
					{detail.strIngredient10 == null ? <></> :
						<li className="name-detail">{detail.strIngredient10}<br /></li>
					}
					{detail.strIngredient11 == null ? <></> :
						<li className="name-detail">{detail.strIngredient11}<br /></li>
					}
					{detail.strIngredient12 == null ? <></> :
						<li className="name-detail">{detail.strIngredient12}<br /></li>
					}
					{detail.strIngredient13 == null ? <></> :
						<li className="name-detail">{detail.strIngredient13}<br /></li>
					}
					{detail.strIngredient14 == null ? <></> :
						<li className="name-detail">{detail.strIngredient14}<br /></li>
					}
				</ul>
			</Typography>
			<Typography gutterBottom variant="h5" component="div">
				<Typography gutterBottom variant="h4" component="div">
					Instructions
				</Typography>
				<span className="name-detail">{detail.strInstructions}</span>
			</Typography>
			<Typography gutterBottom variant="h5" component="div">
				<Typography sx={{marginTop: 2}} gutterBottom variant="h4" component="div">
					Measure
				</Typography>
				<ul>
					{detail.strMeasure1 == null ? <></> :
						<li className="name-detail">{detail.strMeasure1}<br /></li>
					}
					{detail.strMeasure2 == null ? <></> :
						<li className="name-detail">{detail.strMeasure2}<br /></li>
					}
					{detail.strMeasure3 == null ? <></> :
						<li className="name-detail">{detail.strMeasure3}<br /></li>
					}
					{detail.strMeasure4 == null ? <></> :
						<li className="name-detail">{detail.strMeasure4}<br /></li>
					}
					{detail.strMeasure5 == null ? <></> :
						<li className="name-detail">{detail.strMeasure5}<br /></li>
					}
					{detail.strMeasure6 == null ? <></> :
						<li className="name-detail">{detail.strMeasure6}<br /></li>
					}
					{detail.strMeasure7 == null ? <></> :
						<li className="name-detail">{detail.strMeasure7}<br /></li>
					}
					{detail.strMeasure8 == null ? <></> :
						<li className="name-detail">{detail.strMeasure8}<br /></li>
					}
					{detail.strMeasure9 == null ? <></> :
						<li className="name-detail">{detail.strMeasure9}<br /></li>
					}
					{detail.strMeasure10 == null ? <></> :
						<li className="name-detail">{detail.strMeasure10}<br /></li>
					}
					{detail.strMeasure11 == null ? <></> :
						<li className="name-detail">{detail.strMeasure11}<br /></li>
					}
					{detail.strMeasure12 == null ? <></> :
						<li className="name-detail">{detail.strMeasure12}<br /></li>
					}
					{detail.strMeasure13 == null ? <></> :
						<li className="name-detail">{detail.strMeasure13}<br /></li>
					}
					{detail.strMeasure14 == null ? <></> :
						<li className="name-detail">{detail.strMeasure14}<br /></li>
					}
					{detail.strMeasure15 == null ? <></> :
						<li className="name-detail">{detail.strMeasure15}<br /></li>
					}
				</ul>
			</Typography>
			<Typography gutterBottom variant="h5" component="div">
				<Typography gutterBottom variant="h4" component="div">
					Date
				</Typography>
				<span className="name-detail">{detail.dateModified}</span>
				{back &&
					<div className="back">
						<Button onClick={() => {
							setBack(!back);
							setShowDetails(false);
							setShowCoctels(true);
							}}
							endIcon={<ArrowBackIcon />}
							variant="contained">
							Back
						</Button>
					</div>
				}
			</Typography>
		</div>
	);
};

export default CardDetail;
