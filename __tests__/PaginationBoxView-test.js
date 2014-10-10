    /** @jsx React.DOM */
    jest.dontMock('../components/PaginationBoxView.js');
    jest.dontMock('../components/PaginationListView.js');
    jest.dontMock('../components/PageView.js');

    var React = require('react/addons');
    var PaginationBoxView = require('../components/PaginationBoxView.js');
    var PaginationListView = require('../components/PaginationListView.js');
    var PageView = require('../components/PageView.js');
    var TestUtils = React.addons.TestUtils;

    describe('PaginationBoxView', function() {

        var pagination = TestUtils.renderIntoDocument(
            <PaginationBoxView />
        );

        it('should render a pagination component', function() {

            expect(pagination.getDOMNode().nodeName).toEqual("UL");

            TestUtils.scryRenderedComponentsWithType(pagination, PaginationListView);

            expect(pagination.getDOMNode().querySelector(".selected a").textContent).toBe("1");

            var pages = pagination.getDOMNode().querySelectorAll("li");
            expect(pages.length).toEqual(7);
        });

        it('test previous and next buttons', function() {
            TestUtils.Simulate.click(TestUtils.findRenderedDOMComponentWithClass(pagination, 'next'));

            expect(pagination.getDOMNode().querySelector(".selected a").textContent).toBe("2");

            TestUtils.Simulate.click(TestUtils.findRenderedDOMComponentWithClass(pagination, 'previous'));

            expect(pagination.getDOMNode().querySelector(".selected a").textContent).toBe("1");
        });

        it('test click on a page item', function() {
            var list = TestUtils.findRenderedComponentWithType(pagination, PaginationListView);

            var pageItem = pagination.getDOMNode().querySelector("li:nth-child(3)");

            TestUtils.Simulate.click(pageItem);

            expect(pagination.getDOMNode().querySelector(".selected a").textContent).toBe("3");
        });

    });
