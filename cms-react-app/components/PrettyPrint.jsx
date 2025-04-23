function PrettyPrint({ children }) {
    return (
        <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
            {JSON.stringify(children, null, 2)}
        </pre>
    );
}

export default PrettyPrint; 