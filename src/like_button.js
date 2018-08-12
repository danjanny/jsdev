class LikeButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            liked: false
        };
    }

    render() {
        if(this.state.liked) {
            let person = new Person('Ridha Danjanny');
            return person.getName();
        }

        return (
            <button onClick={ () => this.setState({liked: true}) }>Like</button>
        );
    }   
}


let domContainer = document.querySelector('#like_button_container');
ReactDOM.render(<LikeButton/>, domContainer);