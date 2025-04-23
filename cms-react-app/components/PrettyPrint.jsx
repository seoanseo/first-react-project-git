function PrettyPrint(item) {
    return (
        <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
          {JSON.stringify(item, null, 2)}
        </pre>
    );
}

export default PrettyPrint; 