import PropTypes from 'prop-types';
import { Title } from './PageTitle2.styled';

export const PageTitle2 = ({ text }) => {
    return <Title>{ text}</Title>  
};

PageTitle2.propTypes = {
text: PropTypes.string.isRequired,
}