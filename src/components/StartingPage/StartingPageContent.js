import { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import AuthContext from '../../store/auth-context';
import classes from './StartingPageContent.module.css';

const StartingPageContent = () => {
	const authCtx = useContext(AuthContext);

	return (
		<>
			{!authCtx.isLoggedIn && <Redirect to='/auth' />}
			<section className={classes.starting}>
				<h1>Welcome on Board!</h1>
			</section>
		</>
	);
};

export default StartingPageContent;
