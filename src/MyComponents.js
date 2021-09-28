const MyComponent = (props) => {
    const { name, name2, children } = props;

    return (
        <div>
            안녕하세요. 제 이름은 {name} 입니다. <br />제 별명은 {name2} 이구요. <br />
            children 값은 {children}
            입니다.
        </div>
    );
};
MyComponent.defaultProps = {
    name: '기본 이름',
    name2: '오징어',
};

export default MyComponent;
