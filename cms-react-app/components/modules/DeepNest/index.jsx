import Layout from '../../Layout.jsx';
import PrettyPrint from '../../PrettyPrint.jsx';


export function Component({ fieldValues = {}, hublParameters = {} }) {
   
    return <Layout addClass="added_class">
      
                {PrettyPrint(fieldValues)} 
                </Layout>;
}

export default Component;
export { fields } from './fields.jsx';

export const meta = {
    label: `DeepNest`,
    global : false,
   
}