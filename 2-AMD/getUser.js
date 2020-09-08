define(function() {
    let name = 'huangchufeng'
    console.log('getUser ---', name);
    function getName() {
        return name;
    }
    return { getName }
});