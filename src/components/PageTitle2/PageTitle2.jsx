import PropTypes from 'prop-types';
import css from './PageTitle2.module.css'

export const PageTitle2 = ({ text }) => {
    return <h1 className={css.title}>{ text}</h1>  
};

PageTitle2.propTypes = {
text: PropTypes.string.isRequired,
}