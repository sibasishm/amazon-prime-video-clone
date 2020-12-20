import { Jumbotron } from '../components/jumbotron';
import { Button } from '../components/design-system';
import { jumbotronData } from '../fixtures/jumbotronData';

function JumbotronContainer() {
	return (
		<div>
			{jumbotronData.map((data, id) => (
				<Jumbotron key={id}>
					<Jumbotron.Image src={data.image} />
					<Jumbotron.Pane>
						<Jumbotron.Title>{data.title}</Jumbotron.Title>
						<Jumbotron.Description>{data.description}</Jumbotron.Description>
						<Button>{data.buttonText}</Button>
					</Jumbotron.Pane>
				</Jumbotron>
			))}
		</div>
	);
}

export { JumbotronContainer };
