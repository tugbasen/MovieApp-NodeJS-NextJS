import Styled from 'styled-components';

export const MovieFilters = Styled.div`
@media (max-width: 1024px) {
    display: contents
}
@media (max-width: 770px) {
    display: none
}
`;

export const NavBar = Styled.div`
@media (min-width: 1000px) {
    display: contents
}
@media (max-width: 1000px) {
    display: inline-flex
}
`;

export const MoviePreview = Styled.span`
@media (max-width: 1024px) {
    display: contents
}
@media (max-width: 768px) {
    display: none
}
`;

export const MovieDetails = Styled.div`
@media (max-width: 1024px) {
    display: contents
}
@media (max-width: 768px) {
    display: flex
}
`;