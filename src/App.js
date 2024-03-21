import React from "react";
import { Page, Layout, Card, Button } from "@shopify/polaris";
const App = () => (
	<Page>
		<Layout>
			<Layout.Section>
				<Card title='Welcome to my Shopify App' sectioned>
					<p>This is a simple Shopify App built with React and Polaris.</p>
					<Button variant='plain'>Add product</Button>
				</Card>
			</Layout.Section>
		</Layout>
	</Page>
);

export default App;
