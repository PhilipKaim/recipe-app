import { closeModal, openModal } from '../../actions/modal';


test('should open the add recipe modal', () => {
    const action = openModal();
    expect(action).toEqual({
        type: 'OPEN_MODAL'
    });
});

test('should close the add recipe modal', () => {
    const action = closeModal();
    expect(action).toEqual({
        type: 'CLOSE_MODAL'
    });
});