import AzConfirm from '../../../src/components/actions/AzConfirm'
import {createLocalVue, mount} from '@vue/test-utils'
import Vuetify from 'vuetify'
import Vue from 'vue'

const localVue = createLocalVue();
Vue.use(Vuetify)

describe('AzConfirm.test.js', () => {

    let wrapper

    beforeEach(() => {
        const propsData = {
            labelConfirm: 'Confirm',
            labelDecline: 'Decline'
        }
        wrapper = mount(AzConfirm, {localVue, propsData })
    })


    it('Labels are properly rendered', () => {
        expect(wrapper.html()).toContain('Confirm')
        expect(wrapper.html()).toContain('Decline')
    })

    it('Component has default max width', () => {
        expect(wrapper.vm.maxWidth).toBeGreaterThan(0)
    })

    it('Events are being emmited', () => {
        wrapper.findAll('button').at(0).trigger('click.native')
        expect(wrapper.emitted().onDecline).toBeTruthy()

        wrapper.findAll('button').at(1).trigger('click.native')
        expect(wrapper.emitted().onConfirm).toBeTruthy()

    })

})
