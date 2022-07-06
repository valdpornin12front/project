import React from 'react'
import classes from './Favorite.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { addBascket, removeCards } from '../../redux/actions/actions'

const FavoritePage = () => {
	const dispatch = useDispatch()
	const data = useSelector(state => state.data)

	const add = id => {
		dispatch(addBascket(id))
	}
	const remove = () => {
		dispatch(removeCards())
	}

	return (
		<>
			<h2>Избранное</h2>

			{data.map(phon => {
				return (
					<div className={classes.main} key={phon.id}>
						<div className={classes.mainPage}>
							<div className={classes.container}>
								<div className={classes.cards}>
									<div className={classes.cardsImg}></div>
									<div className={classes.square}></div>
									<div className={classes.square}></div>
									<div className={classes.square}></div>
									<div className={classes.square}></div>

									<div className={classes.descripCards}>
										<h3>
											{phon.title} ({phon.vershion})
										</h3>
										<div className={classes.iconCards}>
											<div className={classes.starCards}>
												<ul>
													<li className={classes.iconOneCards}></li>
													<li className={classes.iconOneCards}></li>
													<li className={classes.iconOneCards}></li>
													<li className={classes.iconOneCards}></li>
													<li className={classes.iconOneCards}></li>
												</ul>
												<span>15 отзывов</span>
											</div>

											<div></div>

											<h5>
												<span>Процессор</span> {phon.porc}{' '}
											</h5>
											<h5>
												<span>Основная камера</span> {phon.Mainphoto}{' '}
											</h5>
											<h5>
												<span>Фронтальная камера</span> {phon.secondPhoto}
											</h5>
											<h5>
												{' '}
												<span>Встроенная память</span> {phon.ssd}{' '}
											</h5>
											<h5>
												<span>Оперативная память</span> {phon.ssd}{' '}
											</h5>
										</div>
									</div>
									<div className={classes.buttons}>
										<h3>{phon.valuta}</h3>
										<button className={classes.buttonCards} onClick={add}>
											<p>В корзину</p>
										</button>

										<div className={classes.deleteBtn}>
											<div className={classes.iconTwoCards} onClick={remove}>
												<p>Удалить</p>
											</div>
										</div>
									</div>
								</div>
								<div className={classes.lineCards}></div>
							</div>
						</div>
					</div>
				)
			})}
		</>
	)
}

export default FavoritePage
